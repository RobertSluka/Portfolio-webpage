const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Route to display the contact form
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    // Here you would typically send the data to your database or email
    res.send('Thank you for your message!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
