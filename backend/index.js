import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Register } from "./model/register.js";
const app=express();
app.use(express.json());


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('APP CONNECTED TO MONGODB');
        app.listen(PORT ,()=>{
            console.log(`App is listening to the port:${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });


app.get('/',(request,response) =>{
    console.log(request);
    return response.status(200).set("WELCOME TO E-COMMERCE");
});

app.post('/register',async(request,response)=>{
    try{
        if(!request.body.companyName || !request.body.ownerName || !request.body.rollNo || !request.body.ownerEmail || !request.body.accessCode){
            return response.status(400).json({message:'ALL FIELDS ARE REQUIRED'});
        }
        const newRegister = newRegister({
            companyName:request.body.companyName,
            ownerName:request.body.ownerName,
            rollNo:request.body.rollNo,
            ownerEmail:request.body.ownerEmail,
            accessCode:request.body.accessCode
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});