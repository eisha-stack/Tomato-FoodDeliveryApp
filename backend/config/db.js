import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://eishakanth1310:eishakanth1310@cluster0.rxvmdxw.mongodb.net/tomato').then(()=>console.log("DB Connected"));
}