const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from : 'somnath.jadhav@successive.tech',
        subject : 'Thanks for joining in!',
        text : `Welcome to the app, ${name}. Let me know how you get along the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'somnath.jadhav@successive.tech',
        subject : 'Account canceelation email',
        text : 'We are very sorry to know that you are leaving, Please let us know how could we have made your experience better'
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}