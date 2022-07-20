import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auths.js"
import userRoute from "./routes/users.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"

const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("COnnected to mongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected");
  });

  //middlewares
  app.use(express.json());
  app.use('/api/auth',authRoute)
  app.use('/api/user',userRoute)
  app.use('/api/rooms',roomRoute)
  app.use('/api/hotels',hotelRoute)

  app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message||500
    return res.status(500).json({
      success:false,
      status:errorStatus,
      message:errorMessage,
      stack:err.stack,
    })
  })


app.listen(5000, () => {
  connect();
  console.log("connected to backend");
});
