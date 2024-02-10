// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const port = 3000; // You can choose any available port

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Start the server and listen on the specified port1
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
