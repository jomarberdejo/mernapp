// dataRoutes.js
const express = require('express');
const router = express.Router();
const {
  getData,
  addData,
  updateData,
  deleteData,
} = require('../controllers/dataControllers');

// GET data from the database
router.get('/', getData);

// POST data to the database
router.post('/', addData);

// PUT (update) data in the database
router.put('/:id', updateData);

// DELETE data from the database
router.delete('/:id', deleteData);

module.exports = router;
