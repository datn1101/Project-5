const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.send('Server is operational');
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Serve an image as a static asset
app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'C:\Users\datn1\express-react\server\public\datcat.jpg')); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
