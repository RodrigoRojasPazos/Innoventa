// routes/promotions.js
const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, promotionController.getPromotions);
router.post('/', verifyToken, promotionController.createPromotion);

module.exports = router;
