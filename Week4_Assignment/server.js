const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Parsing the form data

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// api/greet?name=Shikha => use url like this 
app.get('/api/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form submitted! Name: ${name}, Email: ${email}`);
});


// 404 handler --> handles when page is not found
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


// Here to start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});