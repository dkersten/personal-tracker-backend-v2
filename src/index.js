import 'dotenv/config.js'
import cors from 'cors'
import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import urlencoded from 'body-parser'

import models from './models/index.js'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use('/users', routes.user)
app.use('activities', routes.activity)

// custom middleware
app.use((req, res, next) => {
    req.context = {
        models,
        me: req.me = users[1],
    }
    next()
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})//