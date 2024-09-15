import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
const app=express();

app.get('/',async(req,res)=>{
    try {
        await mongoose.connect(process.env.DB_URL);
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