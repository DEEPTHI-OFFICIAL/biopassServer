const express = require("express");
const WebsiteList = require("./schema/bioSchema");
const app = express();
const mongoose = require("mongoose");

//"mongodb://mongodb+srv://appu:<#Appu2705>@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect("mongodb://0.0.0.0:27017/biopass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));

const websiteList = new WebsiteList({
  websiteName: "Wikipedia",
  loginStatus: true,
});

websiteList.save().then(() => {
  console.log("user saved");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/bioRoutes");

app.use("/biopass", userRouter);

app.listen(3000);
