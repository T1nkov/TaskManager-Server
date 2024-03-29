import pool from '../db';

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

async function updateTaskDB(id: number, task, user_id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE tasks set task = $1, user_id = $2 where id = $3 returning *';
    const { rows } = await client.query(sql, [task, user_id, id]);
    await client.query('COMMIT');
    return rows;
  } catch (error) {
    await client.query('rollback');
    return [];
  }
}

async function getTaskByIdDB(id: number) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM tasks where id = $1';
  const { rows } = await client.query(sql, [id]);
  return rows;
}

async function deleteSkillDB(id: number) {
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

export { createTaskDB, getTaskDB, updateTaskDB, getTaskByIdDB, deleteSkillDB };
