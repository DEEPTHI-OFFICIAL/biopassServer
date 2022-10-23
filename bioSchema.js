const mongoose = require("mongoose");

const websiteAuthData = new mongoose.Schema({
  websiteName: String,
  loginStatus: Boolean,
});

module.exports = mongoose.model("WebsiteAuthData", websiteAuthData);
