// config/db.js
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Posinnvoventa'
};

module.exports = {
  getConnection: () => mysql.createConnection(dbConfig)
};

