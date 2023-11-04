const mongoose = require("mongoose");
require("dotenv").config();

atlas =
  "YOUR CLUSTER URL";

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
