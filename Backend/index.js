const express = require("express");
const { connection } = require("./config/db");
const app = express();
require("dotenv").config();
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("server started on port 8787");
});
