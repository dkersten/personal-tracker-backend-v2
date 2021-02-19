import 'dotenv/config.js'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

app.get('/activities', (req, res) => {
    return res.send('Received a GET HTTP method');
});
   
app.post('/activities', (req, res) => {
    return res.send('Received a POST HTTP method');
});
   
app.patch('/activities/:activityId', (req, res) => {
    return res.send('Received a PATCH HTTP method');
});
   
app.delete('/activities/:activityId', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})//