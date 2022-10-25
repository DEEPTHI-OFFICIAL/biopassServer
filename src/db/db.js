const mongoose = require("mongoose");
//"mongodb://mongodb+srv://appu:<password>@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://0.0.0.0:27017/biopass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));
