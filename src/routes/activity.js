import { v4 as uuidv4 } from 'uuid'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.activities))
})
   
router.get('/:activityId', (req, res) => {
    return res.send(req.context.models.activities[req.params.activityId])
})

router.delete('/:activityId', (req, res) => {
    return res.send(`Activity ${req.params.activityId} deleted`)
})

router.post('/', (req, res) => {
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

export default router