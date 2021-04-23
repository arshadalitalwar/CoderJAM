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

router.patch("/:id", async (req, res) => {
  const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({ data: hospital });
});

module.exports = router;
