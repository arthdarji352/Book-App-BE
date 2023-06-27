const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://arth:arth@book-app.dn5rtpu.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to the database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
