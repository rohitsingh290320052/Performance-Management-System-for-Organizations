const Goal = require('../models/Goal');

exports.createGoal = async (req, res) => {
  const { title, description, assignedTo, dueDate } = req.body;
  try {
    const goal = await Goal.create({ title, description, assignedTo, dueDate });
    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find().populate('assignedTo', 'name email');
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateGoal = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const goal = await Goal.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

