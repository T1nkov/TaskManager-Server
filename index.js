require('dotenv').config();

const { app } = require('./src/app');

app.listen(process.env.PORT, () => {
  console.log('server with port 3001 --> start');
});
