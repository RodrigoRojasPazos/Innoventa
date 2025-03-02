// controllers/salesController.js
const { getConnection } = require('../config/db');

exports.createSale = async (req, res) => {
  const { user_id, product_id, quantity, total } = req.body;
  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'INSERT INTO sales (user_id, product_id, quantity, total) VALUES (?, ?, ?, ?)',
      [user_id, product_id, quantity, total]
    );
    await connection.end();
    res.json({ id: result.insertId, message: 'Venta registrada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSales = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM sales');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
