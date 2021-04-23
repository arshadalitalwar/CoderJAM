const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ data: user });
});

router.get("/", async (req, res) => {
  const user = await User.find({});
  res.status(201).json({ data: user });
});

module.exports = router;
