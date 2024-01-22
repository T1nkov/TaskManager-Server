const pool = require('../db');

async function createUserApiDB(name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'INSERT INTO users (name, surname,email,pwd) values ($1,$2,$3,$4) returning *';
    const { rows } = await client.query(sql, [name, surname, email, pwd]);
    await client.query('COMMIT');
    return rows;
  } catch (error) {
    await client.query('ROLLBACK');
    return [];
  }
}

async function getUserByEmailDB(email) {
  const client = await pool.connect();
  const sql = 'select * from users where email = $1';
  const { rows } = await client.query(sql, [email]);
  return rows;
}
module.exports = { createUserApiDB, getUserByEmailDB };
