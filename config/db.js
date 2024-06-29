import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://barikakash396:33858627@cluster0.ccoitxi.mongodb.net/food-del').then(()=> console.log("DB conneced")); 
}