import express from 'express';
import mongoose from 'mongoose';
const app=express();

app.get('/',async(req,res)=>{
    try {
        await mongoose.connect(process.env.DB_PASSWORD);
        console.log("DB connected");
        res.send("connection successful");
        
    } catch (error) {
        res.send(error.message);
    }
})
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})