const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const sparkPostTransporter = nodemailer.createTransport(sparkPostTransport({
    sparkPostApiKey : '95e28bcb759b44011ed5dc34b04b064c96c33c8f',
    endpoint: "https://api.sparkpost.com"
}));

async function main(text, subject , from) {
    try {
        const {dat} = await sparkPostTransporter.sendMail({
            from: from,
            to: 'nicolas929@me.com',
            subject: subject,
            text
        });
        console.log(data);
    }catch(e) {
        console.log(e);
    }
}

module.exports = main();