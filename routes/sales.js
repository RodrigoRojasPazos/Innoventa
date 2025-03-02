// routes/sales.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, salesController.getSales);
router.post('/', verifyToken, salesController.createSale);

module.exports = router;
