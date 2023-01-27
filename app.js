const express = require('express')
const app = express()
const port = 3000

const loginRouter = require('./routes/login.router.js');
app.use('/login', loginRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})