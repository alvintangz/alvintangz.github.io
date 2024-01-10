# Shoot Message Function

This lambda function sends a message to the configured recipient through [MailJet](https://www.mailjet.com/), which offers 200 emails per day for free. It should be triggered by a frontend contact form.

# Setup

1. Install dependencies: `npm install`
2. Create a `.env` file from `.env.example` and fill it in with values
3. Run `npm run deploy` to:
    1. Generate a HTML email template from MJML
    2. Deploy to AWS via Serverless
