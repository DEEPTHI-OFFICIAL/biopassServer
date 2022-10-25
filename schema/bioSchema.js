const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  websiteName: String,
  loginStatus: Boolean,
});

module.exports = mongoose.model("WebsiteList", bioSchema);
