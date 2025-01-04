const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const { createConnection } = require('./src/Helper/DbConnectionString');
const mongoose = require("mongoose");
const userRoute = require("./src/Routes/UserRoute")
const projectRoute = require("./src/Routes/ProjectRoute")
const cors = require("cors")



const app = express()
dotenv.config()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb is Connected!");
    app.listen(PORT, () => console.log("Server started on the PORT", PORT))
  })
  .catch((error) => {
    console.log("Error", error)
  })
app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.use("/project",projectRoute)

