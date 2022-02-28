const express = require('express');
const taskRouter = require('./routes/task');
const app = express();
const { ConnectDB } = require('./db/connect');
app.use(express.json());
require('dotenv').config();
app.use('/api/v1/tasks', taskRouter);

const PORT = 5000;

const Start = () => {
  ConnectDB();
  app.listen(PORT, () => {
    console.log(`Server is listing on Port number ${PORT}....`);
  });
};

Start();
