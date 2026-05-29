const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { getEmployees, addEmployee, editEmployee, removeEmployee } = require('../controllers/employeeController');

console.log(getEmployees);

console.log(authMiddleware);

router.get('/', authMiddleware, getEmployees);
router.post('/', authMiddleware, addEmployee);
router.put('/:id', authMiddleware, editEmployee);
router.delete('/:id', authMiddleware, removeEmployee);

module.exports = router;