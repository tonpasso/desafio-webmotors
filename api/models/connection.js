const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'trybe123',
  database: 'teste_webmotors'
});

module.exports = connection;