const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const loginRouter = require('./routes/login.router.js');
app.use('/login', loginRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})