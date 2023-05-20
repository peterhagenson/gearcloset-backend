


import express from 'express'
// import bodyParser from 'body-parser'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv';
dotenv.config()



const app = express()
const port = process.env.PORT

//const db = require('./db/connect.js')
import connectDB from './db/connect.js'

app.use(express.json())

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors())


import loginRouter from './routes/login.router.js'
app.use('/login', loginRouter);
import registerRouter from './routes/register.router.js'
app.use('/register', registerRouter)


// fetch("https://catfact.ninja/breeds?limit=1")
//     .then((res) => res.json())
//     .then((res) => console.log(res.data))


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