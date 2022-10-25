const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./src/routes/bioRoutes");

app.use("/biopass", userRouter);

app.listen(port);
