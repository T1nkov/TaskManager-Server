const { createTaskDB, getTaskDB, updateTaskDB, getTaskByIdDB, deleteSkillDB } = require('../repository/task.repository');

async function createTask(task, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error('data not found');
  return data;
}

async function getTask() {
  const data = await getTaskDB();
  if (!data.length) throw new Error('data not found');
  return data;
}

async function updateTask(id, task, user_id) {
  const data = await updateTaskDB(id, task, user_id);
  if (!data.length) throw new Error('data not found');
  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);
  if (!data.length) throw new Error('data not found');
  return data;
}

async function deleteSkill(id) {
  const data = await deleteSkillDB(id);
  if (!data.length) throw new Error('data not found');
  return data;
}

module.exports = { createTask, getTask, updateTask, getTaskById, deleteSkill };
