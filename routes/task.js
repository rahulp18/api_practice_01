const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/task');

const routes = require('express').Router();

routes.route('/').get(getAllTasks);
routes.route('/').post(createTask);
routes.route('/:id').get(getTask);
routes.route('/:id').patch(updateTask);
routes.route('/:id').delete(deleteTask);

module.exports = routes;
