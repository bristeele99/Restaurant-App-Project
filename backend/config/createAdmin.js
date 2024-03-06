//config/createAdmin.js

require("dotenv").config();
mongoose = require("./database");
const User = require('../models/User')
  
const createAdmin = async () => {
    
    const adminUser = new User({
      name: 'Admin2',
      email: 'admin2@example.com',
      password: '1234',
      role: 'admin',
    });
    try {
      await adminUser.save();
      console.log('Admin user created successfully');
      mongoose.disconnect();
    } catch (error) {
      console.error('Error creating admin user:', error);
      mongoose.disconnect();
    }
  };
  
  createAdmin();