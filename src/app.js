const express = require('express');
const bodyParser = require('body-parser');
const routeUser = require('./controller/user.controller');
const routeTask = require('./controller/task.controller');
const app = express();

app.use(bodyParser.json());

app.use('/user', routeUser);

app.use('/task', routeTask);

app.use((err, _req, res, _next) => {
  res.send(err.message);
});

module.exports = { app };
