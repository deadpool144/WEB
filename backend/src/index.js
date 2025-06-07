import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
// import User from './models/user.model.js'
import router from './routes/authRoute.js'


import dbConnect from './db/db.js'



dotenv.config()
const PORT=process.env.PORT || 5000
const PASS=process.env.MONGODB_PASS
const app= express()
app.use(cors())
app.use(express.json())


app.use('/auth',router)

app.get('/api/test',(req,res)=>{
    console.log("first")
})
app.post('/signup',(req,res)=>{
    console.log(req.body)
    // const newUser= new User({})
})


app.listen(5000,()=>{
    console.log(`server started at: http://localhost:${5000}`)
})
dbConnect(PASS)