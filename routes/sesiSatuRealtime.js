const express = require('express');
const router = express.Router();
const { SesiSatuRealtime } = require('../models');

/* GET home page. */
router.get('/', async(req, res, next)=> {
  console.log("Route /sesiSatu diakses");
  try {
    const response = await SesiSatuRealtime.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;
