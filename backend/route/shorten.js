const Url = require("../model/shorten");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();

    res.json({ shortUrl });
  } catch (e) {
    console.log("error ", e.message);
  }
});

router.post("/check", (req, res) => {
  res.json("Sending Api");
});

router.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.find(shortUrl);

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).send("URL not found");
  }
});

module.exports = router;
