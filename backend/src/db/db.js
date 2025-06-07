import mongoose from 'mongoose'

const dbConnect=async (pass)=>{
    const url=`mongodb+srv://sujal:${pass}@cluster0.xjsg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try{
       const conn= await mongoose.connect(url)
       console.log("MongoDB Connected!")
    }
    catch(error){
        console.error("MongoDB CONNECTION FAILED!",error)
    }
}
export default dbConnect