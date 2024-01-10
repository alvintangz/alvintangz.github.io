import * as fs from "node:fs/promises";
import * as Yup from "yup";

import cors from "cors";
import express from "express";
import handlebars from "handlebars";
import Mailjet from "node-mailjet";
import serverless from "serverless-http";

const {
    MJ_APIKEY_PUBLIC,
    MJ_APIKEY_PRIVATE,
    FROM_EMAIL,
    FROM_NAME,
    RECIPIENT_EMAIL,
    RECIPIENT_NAME,
} = process.env;

const mailjet = new Mailjet({
    apiKey: MJ_APIKEY_PUBLIC,
    apiSecret: MJ_APIKEY_PRIVATE,
});

const requestSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
});

const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body, { abortEarly: false });
        return next();
    } catch (err) {
        return res.status(400).json(
            err.inner.map(({ path, errors }) => ({
                field: path,
                errors,
            })),
        );
    }
};

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", validateBody(requestSchema), async (req, res) => {
    try {
        const message = await buildMessage(req.body);
        const { response: mjRes } = await mailjet
            .post("send", { version: "v3.1" })
            .request({
                Messages: [message],
            });
        if (mjRes.status >= 200 && mjRes.status < 300) {
            console.log("Success", mjRes);
            return res.status(204).send();
        }
        console.error("MailJet API Error", mjRes);
    } catch (err) {
        console.error("MailJet SDK Error", err);
    }
    return res.status(500).send();
});

app.use((req, res) => {
    return res.status(404).json({
        error: "Not Found",
    });
});

const buildMessage = async ({ email, name, subject, message }) => {
    return {
        From: {
            Email: FROM_EMAIL,
            Name: FROM_NAME,
        },
        To: [
            {
                Email: RECIPIENT_EMAIL,
                Name: RECIPIENT_NAME,
            },
        ],
        ReplyTo: {
            Email: email,
            Name: name,
        },
        Subject: subject,
        TextPart: await compileTemplate(
            `./templates/text.hbs`,
            name,
            message,
            email,
        ),
        HTMLPart: await compileTemplate(
            `./templates/html.hbs`,
            name,
            message,
            email,
        ),
    };
};

const compileTemplate = async (templateFile, name, message, email) => {
    const escape = handlebars.escapeExpression;
    const source = await fs.readFile(templateFile, "utf8");
    const template = handlebars.compile(source, { noEscape: true });
    return template({
        name: escape(name),
        message: escape(message).replaceAll("\n", "<br />"),
        email: escape(email),
    });
};

export const handler = serverless(app);
