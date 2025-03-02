// controllers/userController.js
const { getConnection } = require('../config/db');

exports.getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT id, username, role FROM users');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
