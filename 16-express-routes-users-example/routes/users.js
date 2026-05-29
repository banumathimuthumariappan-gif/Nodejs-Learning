const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/userController');
const authMiddleWare = require('../middleware/authMiddleware');

console.log("Users Route File Loaded");

// Route Level Middleware
router.get('/', authMiddleWare, getUsers);

module.exports = router;