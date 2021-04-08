import express from 'express'
import nodemailer from 'nodemailer'

// const app = express()
// app.use(express.json())

// app.post('/send', (req, res) => {
//   console.log('error' + req.body);

//   const sparkPostTransport = require('nodemailer-sparkpost-transport');
//   const sparkPostTransporter = nodemailer.createTransport(
//   sparkPostTransport({
//     sparkPostApiKey: "95e28bcb759b44011ed5dc34b04b064c96c33c8f",
//     endpoint: "https://api.sparkpost.com"
//   })
// );

//   async function main() {
//   try {
//     const data = await sparkPostTransporter.sendMail({
//       from: req.body.from,
//       to: 'hello@rouxnicolas.fr',
//       subject: req.body.subject,
//       text: req.body.text,
//     });
//     res.send('sucess')
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// main();
// })












// // app.post('/send', (req, res) => {
// //   console.log(req.body);

// //   const sparkPostTransporter = nodemailer.createTransport(
// //     sparkPostTransport({
// //       sparkPostApiKey: '95e28bcb759b44011ed5dc34b04b064c96c33c8f',
// //       endpoint: "https://api.sparkpost.com"
// //     })
// //   );

// //   async function main() {
// //     try {
// //       const data = await sparkPostTransporter.sendMail({
// //         from: req.body.from,
// //         to: 'hello@rouxnicolas.fr',
// //         subject: req.body.subject,
// //         text: req.body.text
// //       });
// //       console.log(data);
// //     } catch (e) {
// //       console.log(e);
// //     }
// //   }
  
// //   main();
// // })

// export default {
//   path: '/api/send',
//   handler: app
// }
