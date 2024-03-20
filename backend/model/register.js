import mongoose from 'mongoose';
const registerSchema = new mongoose.Schema({
    companyName:{type:String,required:true},
    ownerName:{type:String,required:true},
    rollNo:{type:Number,required:true},
    ownerEmail:{type:String,required:true},
    accessCode:{type:String,required:true}
})

export const Register=mongoose.model('Register',registerSchema);