const express = require('express');
const {
  getEmployeeTasks,
  updateTaskStatus,
} = require('../controllers/employeeController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/tasks', authenticateUser, getEmployeeTasks);
router.put('/update-task', authenticateUser, updateTaskStatus);

module.exports = router;
