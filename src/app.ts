import express from 'express';
import bodyParser from 'body-parser';
import routeUser from './controller/user.controller';
import routeTask from './controller/task.controller';
import routeApi from './controller/api.controller';

const app = express();

app.use(bodyParser.json());

app.use('/user', routeUser);

app.use('/task', routeTask);

app.use('/api', routeApi);

app.use((err, _req, res, _next) => {
  res.send(err.message);
});

export default app;
