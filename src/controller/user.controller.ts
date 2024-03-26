import express from 'express';
import { buildResponse } from '../helper/buildResponse';
import { createUser, getAllUser, updateUserById, getUserById, deleteUserById, updateUserPath } from '../service/user.service';
import { IsValidUser, IsValidUserId } from '../helper/validation';
const routeUser = express.Router();

routeUser.post('/', IsValidUser, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeUser.get('/', async (req, res) => {
  try {
    const data = await getAllUser();
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeUser.put('/:id', IsValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUserById(id, name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeUser.delete('/:id', IsValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUserById(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeUser.get('/:id', IsValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

routeUser.patch('/:id', IsValidUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updateUserPath(id, body);
    buildResponse(200, data, res);
  } catch (error: any) {
    buildResponse(404, error.message, res);
  }
});

export default routeUser;
