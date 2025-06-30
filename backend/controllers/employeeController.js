const Task = require('../models/Task');

// Get Employee Tasks
exports.getEmployeeTasks = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user._id });
  res.status(200).json(tasks);
};

// Update Task Status
exports.updateTaskStatus = async (req, res) => {
  const { taskId, status } = req.body;

  const task = await Task.findById(taskId);
  if (!task || task.assignedTo.toString() !== req.user._id.toString()) {
    return res.status(400).json({ error: 'Invalid task or unauthorized' });
  }

  task.status = status;
  await task.save();

  res.status(200).json({ message: 'Task status updated successfully', task });
};
