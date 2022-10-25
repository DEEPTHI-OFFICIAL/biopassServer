const mongoose = require("mongoose");

//atlas = "mongodb+srv://appu:appu@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority"
//local = "mongodb://0.0.0.0:27017/biopass"
const Db =
  "mongodb+srv://appu:appu@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));
