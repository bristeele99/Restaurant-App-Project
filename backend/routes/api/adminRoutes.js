//routes/api/adminRoutes.js

const express = require('express');
const router = express.Router();
const  checkRole  = require('../../config/checkRole'); 
const adminController = require('../../controllers/api/admin'); 

// Route to get all users (admin only)

router.get('/getusers', checkRole('admin'), adminController.getAllUsers);

module.exports = router;
