import mongoose from "mongoose";

export const connectDb=async()=>{
  await mongoose.connect("mongodb://localhost:27017/habittracker",{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("DB connected.")
}
