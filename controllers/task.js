const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ tasks: allTasks });
  } catch (error) {
    console.log(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json({ task: newTask });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ task: updatedTask });
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(200).json(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
