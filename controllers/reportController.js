// controllers/reportController.js
const { getConnection } = require('../config/db');

exports.getSalesReport = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM sales');
    await connection.end();
    res.json({ report: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
