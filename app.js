const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const loginRouter = require('./routes/login.router.js');
app.use('/login', loginRouter);
const registerRouter = require('./routes/register.router.js');
app.use('/register', registerRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})