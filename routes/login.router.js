//const express = require('express');
import express from "express"
const router = express.Router();
import User from '../models/user.js'

router.post('/', (req, res) => {
    console.log(req.body)
})


router.get('/:email/:password', async (req, res) => {
    console.log('in get', req.params.email, req.params.password)
    try {
        const user = await User.find({ email: req.params.email, password: req.params.password })
        //console.log(user)
        let userToSend = user[0]
        if (user[0]) {
            console.log('returned user', userToSend)
            res.send(userToSend)
        }
        else {
            res.status(404)
            res.send({ error: "User not found" })
            console.log('No returned user')
        }
    } catch {
        res.status(404)
    }
})
//module.exports = router;
export default router;
