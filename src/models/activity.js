import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema(
    {
        activityName: {
            type: String,
            required: true,
        },
        activityType: {
            type: String,
            required: true,
        },
        activityDate: {
            type: Date,
            required: true,
        },
        activityDescription: {
            type: String,
            required: true,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true },
)

const Activity = mongoose.model('Activity', activitySchema)

export default Activity