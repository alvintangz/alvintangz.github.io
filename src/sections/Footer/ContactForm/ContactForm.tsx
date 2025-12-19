import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpinner,
    faEnvelope,
    faPaperPlane,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { InputGroup, TextAreaGroup } from "../../../components/formik";
import * as Yup from "yup";
import { useState } from "react";
import "./ContactForm.css";

const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
});

enum ContactFormStatus {
    NOT_SUBMITTED,
    SENDING,
    SENT_SUCCESS,
    SENT_FAILED,
}

interface ContactFormProps {
    subject?: string;
    message?: string;
}

const ContactForm = ({ subject = "", message = "" }: ContactFormProps) => {
    const [status, setStatus] = useState<ContactFormStatus>(
        ContactFormStatus.NOT_SUBMITTED,
    );
    const isSending = status === ContactFormStatus.SENDING;
    const isSent = status === ContactFormStatus.SENT_SUCCESS;
    const shouldShowButton =
        isSending || status === ContactFormStatus.NOT_SUBMITTED;

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    name: "",
                    email: "",
                    subject: subject,
                    message: message,
                }}
                validationSchema={ContactFormSchema}
                onSubmit={async (values) => {
                    setStatus(ContactFormStatus.SENDING);
                    const res = await fetch(
                        "https://gkom3r73mbexu3v4vsvlpcey2a0jzciz.lambda-url.us-east-1.on.aws/",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        },
                    );
                    if (res.status === 204) {
                        setStatus(ContactFormStatus.SENT_SUCCESS);
                    } else {
                        setStatus(ContactFormStatus.SENT_FAILED);
                    }
                }}
            >
                <Form noValidate>
                    <h3 className="form-title">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="form-title-icon"
                        />
                        Shoot me a message directly
                    </h3>
                    <div className="form-personal-box">
                        <div className="form-personal-name">
                            <Field
                                component={InputGroup}
                                disabled={isSent}
                                label="Name"
                                id="name"
                                name="name"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>
                        <div className="form-personal-email">
                            <Field
                                component={InputGroup}
                                disabled={isSent}
                                label="Email address"
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <Field
                        component={InputGroup}
                        disabled={isSent}
                        label="Subject"
                        id="subject"
                        name="subject"
                        placeholder="Request for Virtual High-Five 🙌"
                        required
                    />
                    <Field
                        component={TextAreaGroup}
                        disabled={isSent}
                        label="Message"
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="I'd like to formally request a virtual high-five."
                        required
                    />
                    {shouldShowButton && (
                        <button
                            type="submit"
                            disabled={isSent}
                            className="form-button"
                        >
                            <FontAwesomeIcon
                                icon={isSending ? faSpinner : faPaperPlane}
                                className={
                                    "mr-2 " + (isSending && "animate-spin")
                                }
                            />
                            Send
                        </button>
                    )}
                    {isSent && (
                        <div className="px-3 py-2 cursor-default">
                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                            Sent
                        </div>
                    )}
                    {status === ContactFormStatus.SENT_FAILED && (
                        <div className="px-3 py-2 text-quaternary cursor-default">
                            Failed to send. Try again later.
                        </div>
                    )}
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
