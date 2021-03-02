import mongoose from 'mongoose'

import user from './user.js'
import activity from './activity.js'

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

const models = { user, activity }

export { connectDb }

export default models