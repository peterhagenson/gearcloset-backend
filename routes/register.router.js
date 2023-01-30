//const express = require('express')
import express from "express"
const router = express.Router()
import User from '../models/user.js'

//register
/*router.post('/', (req, res) => {
    console.log('in post credentials', req.body)
    const credentials = req.body;
    const message = { msg: 'In post credentials' }
    res.send(message)
})*/

//const register = async (req, res) => {
router.post('/', async (req, res) => {
    try {
        //const credentials = req.body;
        const user = await User.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json({ msg: 'there was an error' })
    }
})

//module.exports = router;
export default router;