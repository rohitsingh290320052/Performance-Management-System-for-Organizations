const express = require('express');
const {
  addEmployee,
  assignTask,
  viewAllTasks,
} = require('../controllers/adminController');
const { authenticateUser, authenticateAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add-employee', authenticateUser, authenticateAdmin, addEmployee);
router.post('/assign-task', authenticateUser, authenticateAdmin, assignTask);
router.get('/tasks', authenticateUser, authenticateAdmin, viewAllTasks);

module.exports = router;
