//const express = require('express')
import express from "express"
const router = express.Router()

router.post('/', (req, res) => {
    console.log('in post credentials', req.body)
    const message = {
        msg: "in post credentials"
    }
    res.send(message)
})


//module.exports = router;
export default router;