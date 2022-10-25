const express = require("express");
const router = express.Router();
const WebsiteList = require("../schema/bioSchema");

require("../db/db");

router.get("/", async (req, res) => {
  try {
    const websiteList = await WebsiteList.find();
    res.status(200).json(websiteList);
    console.log("success");
  } catch (e) {
    console.log("couldn't retrieve");
  }
});

const websites = [
  { websiteName: "Wikipideia", loginStatus: true },
  { websiteName: "OLX", loginStatus: false },
];

router.post("/post", (req, res) => {
  const isValid = true;
  if (isValid) {
  }
});

module.exports = router;
