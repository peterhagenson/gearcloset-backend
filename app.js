


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT

const db = require('./db/connect.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors())


const loginRouter = require('./routes/login.router.js');
app.use('/login', loginRouter);
const registerRouter = require('./routes/register.router.js');
app.use('/register', registerRouter)



/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})*/


const start = async () => {
    try {
        console.log(process.envPORT, process.env.MONGO_URI)
        await db.connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()