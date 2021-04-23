const express = require("express");
const Doctor = require("../models/doctor.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json({ data: doctor });
});

router.get("/", async (req, res) => {
  const doctors = await Doctor.find({});
  res.status(201).json({ data: doctors });
});
router.patch("/:id", async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({ data: doctor });
});

module.exports = router;
