const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Employee CRUD operations
router.post('/create', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

// Attendance endpoints
router.post('/attendance', employeeController.markAttendance);

// Task endpoints
router.post('/task', employeeController.createTask);
router.put('/task/:id', employeeController.updateTask);
router.delete('/task/:id', employeeController.deleteTask);

module.exports = router;
