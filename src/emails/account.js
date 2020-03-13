const sgMail = require('@sendgrid/mail');
const sendgridApiKey = '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';

sgMail.setApiKey(sendgridApiKey);

sgMail.send({
    to: 'somnath.jadhav@successive.tech',
    from : 'somnath.jadhav@successive.tech',
    subject : 'text Email',
    text : 'I hope this actually works'
})