const mongoose = require("mongoose");
require("dotenv").config();

//atlas = "mongodb+srv://appu:appu@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority"
//local = "mongodb://0.0.0.0:27017/biopass"
// const db = "mongodb+srv://appu:appu@cluster0.jme0etq.mongodb.net/test";

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));
