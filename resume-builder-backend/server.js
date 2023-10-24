
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { pipeline } = require('stream');

// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Sample in-memory storage for resume data (you can replace this with a database)
let resumeData = null;

// API endpoint to receive and store resume data
app.post('/api/resume', (req, res) => {
  const receivedData = req.body;

  // Validate receivedData if needed

  // Store the received resume data
  resumeData = receivedData;

  // Respond with a success message
  res.status(200).json({ message: 'Resume data received successfully.' });
});

// API endpoint to retrieve the stored resume data
app.get('/api/resume', (req, res) => {
  if (resumeData) {
    res.status(200).json(resumeData);
  } else {
    res.status(404).json({ error: 'Resume data not found.' });
  }
});
// API endpoint to update and store resume data using PUT
app.put('/api/resume', (req, res) => {
  const updatedData = req.body;

  // Validate updatedData if needed

  // Update the resume data
  resumeData = updatedData;

  // Respond with a success message
  res.status(200).json({ message: 'Resume data updated successfully.' });
});



// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
