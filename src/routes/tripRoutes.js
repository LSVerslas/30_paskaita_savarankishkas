const express = require('express');
const router = express.Router();

// GET - /trips - grąžina tekstą 'get all trips'
router.get('/trips', (req, res) => {
  res.send('get all trips');
});

module.exports = router;
