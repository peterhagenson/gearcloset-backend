


import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
//require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config()


const app = express()
const port = process.env.PORT

//const db = require('./db/connect.js')
import connectDB from './db/connect.js'


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors())


//const loginRouter = require('./routes/login.router.js');
import loginRouter from './routes/login.router.js'
app.use('/login', loginRouter);
//const registerRouter = require('./routes/register.router.js');
import registerRouter from './routes/register.router.js'
app.use('/register', registerRouter)



/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})*/


const start = async () => {
    try {
        console.log(process.envPORT, process.env.MONGO_URI)
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()