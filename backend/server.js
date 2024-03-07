const cors = require('cors');
require('dotenv').config();
//connect to the database
require("./config/database");
const express = require('express');
const path = require('path');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn');

const app = express();

const corsOptions = {
  origin: 'https://restaurant-app-bamjr.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Log incoming requests
app.use(logger('dev'));

// Parse JSON in the request body
app.use(express.json());

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use((req, res, next) => {
  console.log('Middleware: checkToken'); // Add this line
  require('./config/checkToken')(req, res, next);
});

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// API routes
console.log('Before API routes'); // Add this line
app.use("/api/users", require('./routes/api/users'))
app.use('/api/items', require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn,  require('./routes/api/orders'));
app.use('/api/admin', ensureLoggedIn, require('./routes/api/adminRoutes'));
console.log('After API routes'); // Add this line

// Catch-all route
console.log('Before catch-all route'); // Add this line
app.get("/*", function (req, res) {
  console.log('Handling catch-all route');
  res.sendFile(path.join(process.cwd(), "frontend", "build", "index.html"));
});

console.log('After catch-all route'); // Add this line

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
