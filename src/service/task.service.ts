import { createTaskDB, getTaskDB, updateTaskDB, getTaskByIdDB, deleteSkillDB } from '../repository/task.repository';

async function createTask(task: string, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error('data not found');
  return data;
}

async function getTask() {
  const data = await getTaskDB();
  if (!data.length) throw new Error('data not found');
  return data;
}

async function updateTask(id: number, task: string, user_id) {
  const data = await updateTaskDB(id, task, user_id);
  if (!data.length) throw new Error('data not found');
  return data;
}

async function getTaskById(id: number) {
  const data = await getTaskByIdDB(id);
  if (!data.length) throw new Error('data not found');
  return data;
}

async function deleteSkill(id: number) {
  const data = await deleteSkillDB(id);
  if (!data.length) throw new Error('data not found');
  return data;
}

export { createTask, getTask, updateTask, getTaskById, deleteSkill };
