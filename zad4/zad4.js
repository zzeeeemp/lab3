const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Ustawienie katalogu dla plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Definicja tras dla widoków
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'student.html'));
});

app.get('/add-student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'add-student.html'));
});

// Nasłuchiwanie na określonym porcie
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});