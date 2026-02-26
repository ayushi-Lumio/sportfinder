const express = require("express");
const router = express.Router();
const Sport = require("../models/sport");

// Add sport
router.post("/add", async (req, res) => {
  const sport = new Sport(req.body);
  await sport.save();
  res.send("Sport added successfully");
});

// Get all sports
router.get("/", async (req, res) => {
  const sports = await Sport.find();
  res.json(sports);
});

module.exports = router;