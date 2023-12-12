const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

db.connect(err => {
  if (err) {
    console.error('Unable to connect to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Sign In route
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  // Search for credentials in the database
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length > 0) {
      // Successful sign in
      res.send('<h1>Welcome to the welcome page!</h1>');
    } else {
      // Incorrect credentials
     
