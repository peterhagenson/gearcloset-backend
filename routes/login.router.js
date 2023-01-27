const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body)
})


router.get('/', (req, res) => {
    console.log('in get')
    const message = {
        msg: "hello peter"
    }
    res.send(message)
})

module.exports = router;