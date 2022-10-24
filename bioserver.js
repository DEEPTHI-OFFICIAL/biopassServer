const express = require("express");
const WebsiteList = require("./bioSchema");
const app = express();
const mongoose = require("mongoose");

//"mongodb://mongodb+srv://appu:<#Appu2705>@cluster0.v4umeji.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(
  "mongodb://localhost:27017/biopass",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

async function web() {
  const website = await WebsiteList.create({
    websiteName: "Wikipedia",
    loginStatus: true,
  });
  console.log(website);
}

web();

// const websiteList = new WebsiteList({
//   websiteName: "Wikipedia",
//   loginStatus: true,
// });

// websiteList.save().then(() => {
//   console.log("user saved");
// });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/bioRoutes");

app.use("/biopass", userRouter);

app.listen(3000);
