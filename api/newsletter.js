import express from 'express'
import Mailchimp from 'mailchimp-api-v3'

const API_KEY = process.env.MAILCHIMP_API_KEY
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const mailchimp = new Mailchimp(API_KEY)

const app = express()
app.use(express.json())

const cors = require('cors');
app.use(cors());

app.post('/subscribe', async(req, res) => {
  const {email: email_address} = req.body
    try{
      const response = await mailchimp.request({
        method: 'post',
        path: `/lists/${AUDIENCE_ID}/members`,
        body: {
          email_address,
          status: "subscribed"
        }
      })
      const { _links, ...result } = response
      res.status(result.statusCode).json(result)
    }catch(err){
      res.status(err.status).send(err.detail)
    }
})

export default {
  path: '/api/newsletter',
  handler: app
}