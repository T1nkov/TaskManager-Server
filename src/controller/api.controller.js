const express = require('express');
const routeApi = express.Router();
const buildResponse = require('../helper/buildResponse');
const { createUserApi } = require('../service/api.service');
routeApi.post('/reg', async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUserApi(name, surname, email, pwd);
    buildResponse(200, data, res);
  } catch (error) {
    buildResponse(404, error.message, res);
  }
});

module.exports = routeApi;
