const express = require('express');
const routeApi = express.Router();
const { buildResponse } = require('../helper/buildResponse');
const { createUserApi, authUserApi } = require('../service/api.service');
const { createToken } = require('../helper/jwt');

routeApi.post('/reg', async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUserApi(name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

routeApi.post('/auth', async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUserApi(email, pwd);
    const token = createToken(data);
    buildResponse(200, token, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

module.exports = routeApi;
