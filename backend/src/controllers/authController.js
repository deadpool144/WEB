import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import dotenv from 'dotenv'


dotenv.config()

const signUp= async (req,res)=>{
    const {firstname,lastname,email,mobile,password}=req.body
    try{
        const hashed= await bcrypt.hash(password,10)
        const user=User({firstname,lastname,email,mobile,password:hashed})
        console.log(user)
        await user.save()
    }
    catch(error){
        console.error("User not created/n",error)
    }
}

const login = async (req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email})
    if(!user){
        console.log("no user found")
        return
    }
     
    const credential=await bcrypt.compare(password,user.password)
    if(!credential){
        console.log("credential mismatch!")
        return
    }
    const token =jwt.sign({id:user._id}, process.env.JWT_TOKEN,{expiresIn:'1d'})
    return token
    }
    catch(error){
        console.log(error)
    }
    
}

export { signUp, login };
