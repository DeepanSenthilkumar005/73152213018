const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const short = require("./route/shorten");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",short);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully Connected"))
  .catch((e) => console.log(e.message));

const port = process.env.PORT || 8090;
app.listen(port,()=>console.log(`App is Running on http://localhost:${port}`));
