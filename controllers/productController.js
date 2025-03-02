// controllers/productController.js
const { getConnection } = require('../config/db');

exports.getProducts = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM products');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, stock, category_id, subcategory_id } = req.body;
  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'INSERT INTO products (name, price, stock, category_id, subcategory_id) VALUES (?, ?, ?, ?, ?)',
      [name, price, stock, category_id, subcategory_id]
    );
    await connection.end();
    res.json({ id: result.insertId, message: 'Producto creado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, category_id, subcategory_id } = req.body;
  try {
    const connection = await getConnection();
    await connection.execute(
      'UPDATE products SET name = ?, price = ?, stock = ?, category_id = ?, subcategory_id = ? WHERE id = ?',
      [name, price, stock, category_id, subcategory_id, id]
    );
    await connection.end();
    res.json({ message: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnection();
    await connection.execute('DELETE FROM products WHERE id = ?', [id]);
    await connection.end();
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
