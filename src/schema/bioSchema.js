const mongoose = require("mongoose");

//username, password

const bioSchema = new mongoose.Schema({
  websiteName: {
    type: String,
    required: true,
    lowercase: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  loginStatus: {
    type: Boolean,
    required: true,
  },
  webSiteUrl: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("WebsiteList", bioSchema);
