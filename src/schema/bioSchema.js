const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  websiteName: {
    type: String,
    required: true,
    lowercase: true,
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
