const express = require('express');
const routeUser = express.Router();
const { buildResponse } = require('../helper/buildResponse');
const { createUser, getAllUser, updateUserById, getUserById, deleteUserById, updateUserPath } = require('../service/user.service');

routeUser.post('/', async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeUser.get('/', async (req, res) => {
  try {
    const data = await getAllUser();
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeUser.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUserById(id, name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeUser.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUserById(id);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeUser.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeUser.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updateUserPath(id, body);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeUser.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updateUserPath(id, body);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});
module.exports = routeUser;
