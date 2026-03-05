const { Pool } = require('pg');

const pool = new Pool({
  password: '12345678',
  database: 'todo-list',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
});

module.exports = pool;