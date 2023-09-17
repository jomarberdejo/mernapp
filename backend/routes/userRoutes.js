// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController'); // Import the users controller

// User Sign-Up
router.post('/sign-up', usersController.signUp);

// User Sign-In
router.post('/sign-in', usersController.signIn);

module.exports = router;
