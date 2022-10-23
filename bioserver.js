const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/bioRoutes");

app.use("/biopass", userRouter);

app.listen(3000);
