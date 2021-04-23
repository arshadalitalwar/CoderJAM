const express = require("express");
const Hospital = require("../models/hospitals.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const hospital = await Hospital.create(req.body);
  res.status(201).json({ data: hospital });
});

router.get("/", async (req, res) => {
  const hospitals = await Hospital.find({});
  res.status(201).json({ data: hospitals });
});

module.exports = router;
