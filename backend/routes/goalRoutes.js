const express = require('express');
const { createGoal, getGoals, updateGoal } = require('../controllers/goalController');
const { protect, managerOrAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, managerOrAdmin, createGoal);
router.get('/', protect, getGoals);
router.put('/:id', protect, managerOrAdmin, updateGoal);

module.exports = router;
