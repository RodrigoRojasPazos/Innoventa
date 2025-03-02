// routes/reports.js
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const verifyToken = require('../middleware/verifyToken');

router.get('/sales', verifyToken, reportController.getSalesReport);

module.exports = router;
