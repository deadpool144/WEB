import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
     createdAt: {
    type: Date,
    default: Date.now,   // timestamp when created
  }
})

const Product=mongoose.model('Product',productSchema)
export default Product