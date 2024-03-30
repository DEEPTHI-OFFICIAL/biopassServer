const mongoose = require("mongoose");
require("dotenv").config();

atlas =
  "mongodb+srv://deepthi:deepthiSun@cluster0.jzktmar.mongodb.net/";

mongoose.Promise = global.Promise;

mongoose
  .connect(atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));
