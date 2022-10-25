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

router.post("/addWeb", async (req, res) => {
  try {
    const { websiteName, loginStatus, webSiteUrl } = req.body;

    const websiteList = new WebsiteList({
      websiteName,
      loginStatus,
      webSiteUrl,
    });

    const saved = await websiteList.save();

    if (saved) {
      console.log("data saved");
      res.status(200).json({ success: true });
    } else {
      console.log("not saved");
      res.status(500).json({ success: false });
    }
  } catch (e) {}
});

module.exports = router;
