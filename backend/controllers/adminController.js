const User = require('../models/User');
const Task = require('../models/Task');

// Add Employee
exports.addEmployee = async (req, res) => {
  const { email, role, name } = req.body;

  // Check if employee exists
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ error: 'Employee already exists' });

  // Create employee
  const employee = await User.create({
    email,
    role: 'employee',
    name,
    company: req.user.company,
    branch: req.user.branch,
  });

  res.status(201).json({ message: 'Employee added successfully', employee });
};

// Assign Task
exports.assignTask = async (req, res) => {
  const { title, description, assignedTo, priority, dueDate } = req.body;

  const employee = await User.findById(assignedTo);
  if (!employee || employee.role !== 'employee') {
    return res.status(400).json({ error: 'Invalid employee ID' });
  }

  const task = await Task.create({
    title,
    description,
    assignedTo,
    priority,
    dueDate,
  });

  res.status(201).json({ message: 'Task assigned successfully', task });
};

// View All Tasks
exports.viewAllTasks = async (req, res) => {
  const tasks = await Task.find({}).populate('assignedTo', 'name email');
  res.status(200).json(tasks);
};
