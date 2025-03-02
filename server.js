// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Importación de rutas
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const salesRoutes = require('./routes/sales');
const promotionRoutes = require('./routes/promotions');
const reportRoutes = require('./routes/reports');
const userRoutes = require('./routes/users');
const swaggerConfig = require("./config/swagger");

// Middlewares
app.use(bodyParser.json());

// Rutas base
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/users', userRoutes);
app.use(swaggerConfig);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
