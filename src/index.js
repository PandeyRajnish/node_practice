// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`nServer is running on port : ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
