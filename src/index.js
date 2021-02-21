import 'dotenv/config.js'
import cors from 'cors'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import urlencoded from 'body-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

let users = {
    1: {
        id: '1',
        name: 'Dan'
    }
}

let activities = {
    1: {
        id: '1',
        name: 'Cardio',
        type: 'Exercise',
        date: 'Feb. 21, 2021',
        description: 'Went for a 1.5 mile run',
        userId: '1'
    },
    2: {
        id: '2',
        name: 'Job Application',
        type: 'Career',
        date: 'Feb 21, 2021',
        description: 'Applied for a front end developer position',
        userId: '1'
    }
}

// routes
app.get('/users', (req, res) => {
    return res.send(Object.values(users))
})

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId])
})

app.get('/activities', (req, res) => {
    return res.send(Object.values(activities));
});
   
app.get('/activities/:activityId', (req, res) => {
    return res.send(activities[req.params.activityId]);
});

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
        userId: req.body.userId
    }
    activities[id] = activity

    return res.send(activity)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})//