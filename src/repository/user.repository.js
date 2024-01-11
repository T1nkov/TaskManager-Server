const pool = require('../db');

async function createUserDB(name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'INSERT INTO users (name, surname,email,pwd) values ($1,$2,$3,$4) returning *';
    const { rows } = await client.query(sql, [name, surname, email, pwd]);
    await client.query('commit');
    return rows;
  } catch (error) {
    await client.query('rollback');
    return [];
  }
}

async function getAllUserDB() {
  const client = await pool.connect();
  const sql = 'select * from users';
  const { rows } = await client.query(sql);
  return rows;
}

async function updateUserByIdDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *';
    const { rows } = await client.query(sql, [name, surname, email, pwd, id]);
    await client.query('commit');
    return rows;
  } catch (error) {
    await client.query('rollback');
    return [];
  }
}

async function getUserByEmailDB(email) {
  const client = await pool.connect();
  const sql = 'select * from users where email = $1 returning *';
  const { rows } = await client.query(sql, [email]);
  return rows;
}

async function getUserByIdDB(id) {
  const client = await pool.connect();
  const sql = 'select * from users where id = $1';
  const { rows } = await client.query(sql, [id]);
  return rows;
}
async function deleteUserByIdDB(id) {
  const client = await pool.connect();
  const sql = 'delete from users where id = $1 returning *';
  const { rows } = await client.query(sql, [id]);
  return rows;
}
module.exports = { createUserDB, getAllUserDB, updateUserByIdDB, getUserByEmailDB, getUserByIdDB, deleteUserByIdDB };
