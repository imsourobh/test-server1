const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON data
app.use(express.static(path.join(__dirname))); // Serve static files (HTML, CSS, JS)

// In-memory storage for user data
let userData = {};

// Route to handle POST request with name and phone number
app.post('/submit', (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone number are required bro. Try again.' });
  }

  // Store the data
  userData = { name, phone };

  res.status(200).json({ message: 'Data received successfully!', data: userData });
});

// Route to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to send user data to the webpage
app.get('/data', (req, res) => {
  res.json(userData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
