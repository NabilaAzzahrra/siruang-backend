const express = require('express');
const router = express.Router();
const { Satu } = require('../models');

/* GET home page. */
router.get('/', async(req, res, next)=> {
  try {
    const response = await Satu.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;
