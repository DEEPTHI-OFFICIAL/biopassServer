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
    const { websiteName, websiteUrl, username, password } = req.body;

    const websiteList = new WebsiteList({
      websiteName,
      websiteUrl,
      username,
      password,
    });

    const saved = await websiteList.save();

    if (saved) {
      console.log("data saved");
      res.status(200).json({ success: true });
    } else {
      console.log("not saved");
      res.status(500).json({ success: false });
    }
  } catch (e) {
    console.log("unvalid data");
    res.status(500).json({ message: "invalid format" });
  }
});

router.route("/deleteall").get(async (req, res) => {
  try {
    await WebsiteList.deleteMany({});
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete" });
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const website = await WebsiteList.findById(req.params.id);
      res.status(200).json({ website });
    } catch (e) {
      console.log("error");
      res.status(500).json({ message: "website doesn't exist" });
    }
  })
  .put(async (req, res) => {
    try {
      const { loginStatus, username, password } = req.body;

      const website = await WebsiteList.findById(req.params.id);

      website.username = username;
      website.password = password;
      website.loginStatus = loginStatus;

      website.save();

      console.log(website);
      res.status(200).json({ website });
    } catch (e) {
      console.log("error");
      res.status(500).json({ message: "website doesn't exist" });
    }
  })
  .delete(async (req, res) => {
    try {
      WebsiteList.deleteOne(req.params.id);
      res.status(200).json({ message: "delete successful" });
    } catch (e) {
      res.status(500).json({ message: "delete unsuccessful" });
    }
  });

module.exports = router;
