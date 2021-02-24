import 'dotenv/config.js'
import cors from 'cors'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import urlencoded from 'body-parser'

import models from './models/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

// custom middleware
app.use((req, res, next) => {
    req.context = {
        models,
        me: req.me = users[1],
    }
    next()
});

// routes
app.get('/users', (req, res) => {
    return res.send(Object.values(req.context.models.users))
})

app.get('/users/:userId', (req, res) => {
    return res.send(req.context.models.users[req.params.userId])
})

app.get('/activities', (req, res) => {
    return res.send(Object.values(req.context.models.activities))
})
   
app.get('/activities/:activityId', (req, res) => {
    return res.send(req.context.models.activities[req.params.activityId])
})

app.delete('/activities/:activityId', (req, res) => {
    return res.send(`Activity ${req.params.activityId} deleted`)
})

app.post('/activities', (req, res) => {
    const id = uuidv4()
    const activity = {
        id,
        name: req.body.name,
        type: req.body.type,
        date: req.body.date,
        description: req.body.description,
        userId: req.context.me.id
    }
    req.context.models.activities[id] = activity

    return res.send(activity)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})//