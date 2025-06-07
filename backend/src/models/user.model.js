import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        uniqued:true
    },
    mob_no:{
        type:Number,
        required:false
    },
    password:{
        type:String,
        requird:true
    },
     createdAt: {
    type: Date,
    default: Date.now,   // timestamp when created
  }
})

const User=mongoose.model('User',userSchema)
export default User