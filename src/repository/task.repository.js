const pool = require('../db');

async function createTaskDB(task, user_id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'INSERT INTO tasks (task, user_id) values ($1,$2) RETURNING *';
    const { rows } = await client.query(sql, [task, user_id]);
    await client.query('commit');
    return rows;
  } catch (error) {
    await client.query('rollback');
    return [];
  }
}

async function getTaskDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM tasks';
  const { rows } = await client.query(sql);
  return rows;
}

async function updateTaskDB(id, task, user_id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE tasks set task = $1, user_id = $2 where id = $3';
    const { rows } = await client.query(sql, [task, user_id, id]);
    await client.query('COMMIT');
    return rows;
  } catch (error) {
    await client.query('rollback');
    return [];
  }
}

async function getTaskByIdDB(id) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM tasks where id = $1';
  const { rows } = await client.query(sql, [id]);
  return rows;
}

async function deleteSkillDB(id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'DELETE FROM tasks where id = $1 returning *';
    const { rows } = await client.query(sql, [id]);
    await client.query('COMMIT');
    return rows;
  } catch (error) {
    await client.query('rollback');
    return [];
  }
}


module.exports = { createTaskDB, getTaskDB, updateTaskDB, getTaskByIdDB, deleteSkillDB };
