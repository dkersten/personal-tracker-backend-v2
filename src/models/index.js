import mongoose from 'mongoose'

import User from './user.js'
import Activity from './activity.js'

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

const models = { User, Activity }

export { connectDb }

export default models