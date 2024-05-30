import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://manpreetmann4788:manpreet2002@cluster0.ptwwf5e.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

