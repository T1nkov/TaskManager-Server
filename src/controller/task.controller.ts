import express from 'express';
import { createTask, getTask, updateTask, getTaskById, deleteSkill } from '../service/task.service';
import { buildResponse } from '../helper/buildResponse';

const routeTask = express.Router();

routeTask.post('/', async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeTask.get('/', async (req, res) => {
  try {
    const data = await getTask();
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeTask.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task, user_id } = req.body;
    const data = await updateTask(id, task, user_id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeTask.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getTaskById(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeTask.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteSkill(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});
export default routeTask;
