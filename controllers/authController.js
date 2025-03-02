// controllers/authController.js
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

// Nota: En producción, las credenciales deben ser validadas consultando la BD
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ username, role: 'admin' }, secret, { expiresIn: '1h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Credenciales incorrectas' });
};
