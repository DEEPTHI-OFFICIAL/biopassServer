const express = require("express");
const WebsiteAuthData = require("./bioSchema");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/biopass",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

const websiteAuthData = new WebsiteAuthData({
  websiteName: "Wikipedia",
  loginStatus: true,
});

websiteAuthData.save().then(() => {
  console.log("user saved");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/bioRoutes");

app.use("/biopass", userRouter);

app.listen(3000);
