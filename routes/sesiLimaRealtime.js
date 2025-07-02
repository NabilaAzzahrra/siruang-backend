const express = require("express");
const router = express.Router();
const { SesiLimaRealtime } = require("../models");

/* GET home page. */
router.get("/", async (req, res, next) => {
  console.log("Route /sesiSatu diakses");
  try {
    const response = await SesiLimaRealtime.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
});

module.exports = router;
