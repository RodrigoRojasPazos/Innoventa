// controllers/promotionController.js
const { getConnection } = require('../config/db');

exports.createPromotion = async (req, res) => {
  const { product_id, discount, start_date, end_date, active } = req.body;
  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'INSERT INTO promotions (product_id, discount, start_date, end_date, active) VALUES (?, ?, ?, ?, ?)',
      [product_id, discount, start_date, end_date, active]
    );
    await connection.end();
    res.json({ id: result.insertId, message: 'Promoción creada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPromotions = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM promotions');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
