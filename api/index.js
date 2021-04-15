import express from 'express'
import nodemailer from 'nodemailer'
const sparkPostTransport = require('nodemailer-sparkpost-transport');

const app = express()

app.use(express.json())


app.post('/send', (req, res) => {
  console.log(req.body);

  const sparkPostTransporter = nodemailer.createTransport(
  sparkPostTransport({
    sparkPostApiKey: process.env.sparkPostApiKey,
    endpoint: "https://api.sparkpost.com"
  })
);

  async function main() {
  try {
    const data = await sparkPostTransporter.sendMail({
      from: 'noreply@rouxnicolas.fr',
      to: req.body.email,
      subject: 'Demande de devis',
      html: `<p style="font-size : 14px">Bonjour <strong>${req.body.name}</strong>,</p> <p style="font-size : 14px">Nous avons bien reçu votre demande, nous reviendrons vers vous dans les plus brefs délai. </p><p style="font-size : 14px">Merci de votre confiance, à bientot, </p><p style="font-size : 14px"> Nicolas ROUX <br> 06 83 97 65 90 <br> Développeur Web</p>`,
    });
    res.setHeader('Content-type', 'application/json')
    res.send(data)
  } catch (e) {
  }
}

main();

async function mail() {
  try {
    const data = await sparkPostTransporter.sendMail({
      from: 'devis@rouxnicolas.fr',
      to: 'hello@rouxnicolas.fr',
      subject: 'Demande de devis',
      text: `Bonjour vous avez une nouvelle demande de devis de la part de ${req.body.name}. Vous pouvez le joindre au ${req.body.phone} ou part mail ${req.body.email}. Il a choisi la prestation ${req.body.prestation} et vous a laissé le message suivant ${req.body.text}.`,
    });
    res.setHeader('Content-type', 'application/json')
    res.send(data)
  } catch (e){

  }
}

mail();

})














// app.post('/send', (req, res) => {
//   console.log(req.body);

//   const sparkPostTransporter = nodemailer.createTransport(
//     sparkPostTransport({
//       sparkPostApiKey: '95e28bcb759b44011ed5dc34b04b064c96c33c8f',
//       endpoint: "https://api.sparkpost.com"
//     })
//   );

//   async function main() {
//     try {
//       const data = await sparkPostTransporter.sendMail({
//         from: req.body.from,
//         to: 'hello@rouxnicolas.fr',
//         subject: req.body.subject,
//         text: req.body.text
//       });
//       console.log(data);
//     } catch (e) {
//       console.log(e);
//     }
//   }
  
//   main();
// })

export default {
  path: '/api',
  handler: app
}
