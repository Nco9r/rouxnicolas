import express from 'express'
import nodemailer from 'nodemailer'
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const app = express()
app.use(express.json())

app.post('/send', (req, res) => {
  console.log(req.body);

  const sparkPostTransporter = nodemailer.createTransport(
  sparkPostTransport({
    sparkPostApiKey: "95e28bcb759b44011ed5dc34b04b064c96c33c8f",
    endpoint: "https://api.sparkpost.com"
  })
);

  async function main() {
  try {
    const data = await sparkPostTransporter.sendMail({
      from: 'hello@rouxnicolas.fr',
      to: req.body.email,
      subject: 'Demande de devis',
      text: `Bonjour ${req.body.name}, Nous avons bien reçu votre demande, nous reviendrons vers vous dans les plus brefs délai. À bientot chez nicolasroux.fr`,
    });
    res.send(data);
  } catch (e) {
    console.log(e);
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
    res.send(data);
  } catch (e) {
    console.log(e);
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
