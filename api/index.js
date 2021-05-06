import express from 'express'
import nodemailer from 'nodemailer'
// import Mailchimp from 'mailchimp-api-v3'
// const API_KEY = process.env.MAILCHIMP_API_KEY
// const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
// const mailchimp = new Mailchimp(API_KEY)
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const app = express()
app.use(express.json())

// app.post('/subscribe', async(req, res) => {
//   const {email: email_address} = req.body
//     try{
//       const response = await mailchimp.request({
//         method: 'post',
//         path: `/lists/${AUDIENCE_ID}/members`,
//         body: {
//           email_address,
//           status: "subscribed"
//         }
//       })
//       const { _links, ...result } = response
//       res.status(result.statusCode).json(result)
//     }catch(err){
//       res.status(err.status).send(err.detail)
//     }
// })

app.post('/send', (req, res) => {
  console.log(req.body);

  const sparkPostTransporter = nodemailer.createTransport(
  sparkPostTransport({
    sparkPostApiKey: '95e28bcb759b44011ed5dc34b04b064c96c33c8f',
    endpoint: "https://api.sparkpost.com"
  })
);

  async function main() {
  try {
    const data = await sparkPostTransporter.sendMail({
      from: 'noreply@rouxnicolas.fr',
      to: req.body.email,
      subject: 'Demande de devis',
      html: `<p style="font-size : 14px">Bonjour Mme/Mr<strong>${req.body.name}</strong>,</p> <p style="font-size : 14px">Nous avons bien reçu votre demande, nous reviendrons vers vous dans les plus brefs délais. </p><p style="font-size : 14px">Merci de votre confiance, à bientôt, </p><p style="font-size : 14px"> Nicolas ROUX <br> 06 83 97 65 90 <br> Développeur Web</p>`,
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



// app.post('/devis-mt', (req, res) => {
//   console.log(req.body);

//   const sparkPostTransporter = nodemailer.createTransport(
//   sparkPostTransport({
//     sparkPostApiKey: process.env.sparkPostApiKey,
//     endpoint: "https://api.sparkpost.com"
//   })
// );

//   async function main() {
//   try {
//     const data = await sparkPostTransporter.sendMail({
//       from: 'noreply@rouxnicolas.fr',
//       to: req.body.email,
//       subject: 'Demande de devis',
//       html: `<p style="font-size : 14px">Bonjour <strong>${req.body.name}</strong>,</p> <p style="font-size : 14px">Nous avons bien reçu votre demande, nous reviendrons vers vous dans les plus brefs délai. </p><p style="font-size : 14px">Merci de votre confiance, à bientot, </p><p style="font-size : 14px"> Nicolas ROUX <br> 06 83 97 65 90 <br> Développeur Web</p>`,
//     });
//     res.setHeader('Content-type', 'application/json')
//     res.send(data)
//   } catch (e) {
//   }
// }

// main();

// async function mail() {
//   try {
//     const data = await sparkPostTransporter.sendMail({
//       from: 'devis@rouxnicolas.fr',
//       to: 'hello@rouxnicolas.fr',
//       subject: 'Demande de devis',
//       text: `Bonjour vous avez une nouvelle demande de devis de la part de ${req.body.name}. Vous pouvez le joindre au ${req.body.phone} ou part mail ${req.body.email}. Il a choisi la prestation ${req.body.prestation} à la date du ${req.body.date}, sur le lieu ${req.body.lieu}, avec ${req.body.convives} convives.`,
//     });
//     res.setHeader('Content-type', 'application/json')
//     res.send(data)
//   } catch (e){

//   }
// }

// mail();

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
