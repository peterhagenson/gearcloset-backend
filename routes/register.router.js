import express from "express"
const router = express.Router()
import User from '../models/user.js'

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ msg: 'there was an error' })
    }
})

export default router;