const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');

// Create a new admin
router.post('/create', adminController.createAdmin);

module.exports = router;
