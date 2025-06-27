const express = require('express');
const router = express.Router();
const { SesiDuaRealtime } = require('../models');

/* GET home page. */
router.get('/', async(req, res, next)=> {
  try {
    const response = await SesiDuaRealtime.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;
