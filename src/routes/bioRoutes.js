const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.json(websites);
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
