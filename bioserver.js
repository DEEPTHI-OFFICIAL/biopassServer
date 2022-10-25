const express = require("express");
const WebsiteList = require("./src/schema/bioSchema");
const app = express();
const mongoose = require("mongoose");

//"mongodb://mongodb+srv://appu:<password>@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect("mongodb://0.0.0.0:27017/biopass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));

runt();

async function runt() {
  try {
    const websiteList = await WebsiteList.find();

    // const websiteList = await WebsiteList.create({
    //   websiteName: "whatsapp",
    //   loginStatus: true,
    //   webSiteUrl: "www.whatsapp.com",
    // });
    console.log(websiteList);
  } catch (e) {
    console.log(e.message);
  }
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./src/routes/bioRoutes");

app.use("/biopass", userRouter);

app.listen(3000);
