import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("starting up.");

  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful");
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("listening on port 3000!!!");
  });
};

start();
