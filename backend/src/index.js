import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
// import User from './models/user.model.js'
import authRouter from './routes/authRoute.js'


import dbConnect from './db/db.js'



dotenv.config()
const PORT=process.env.PORT || 5000
const PASS=process.env.MONGODB_PASS
const app= express()
app.use(cors(   //add 8-6-25
    {
        origin: '*', // Adjust this to your frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    }
))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome to the backend")
})
app.use('/api/auth',authRouter)

app.get('/api/test',(req,res)=>{
    console.log("first")
})
// app.post('/signup',(req,res)=>{
//     console.log(req.body)
//     // const newUser= new User({})
// })


app.listen(5000,()=>{
    console.log(`server started at: http://localhost:${PORT}`)
})
dbConnect(PASS)