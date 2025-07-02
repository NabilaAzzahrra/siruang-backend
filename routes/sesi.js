const express = require('express');
const router = express.Router();
const { Sesi } = require('../models');

/* GET home page. */
router.get('/', async(req, res, next)=> {
  console.log("Route /sesi diakses");
  try {
    const response = await Sesi.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;
