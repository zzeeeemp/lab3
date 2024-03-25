const express = require('express');
const app = express();
const PORT = 3000;

// Middleware dla obsługi danych z formularzy
app.use(express.urlencoded({ extended: true }));

// Endpoint dla strony głównej
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HOME</title>
      </head>
      <body>
        <p>HOME</p>
      </body>
    </html>
  `);
});

// Endpoint dla strony student
app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>STUDENT</title>
      </head>
      <body>
        <p>STUDENT</p>
      </body>
    </html>
  `);
});

// Endpoint dla strony dodawania studenta
app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ADD-STUDENT</title>
      </head>
      <body>
        <p>ADD-STUDENT</p>
      </body>
    </html>
  `);
});

// Nasłuchuj na określonym porcie
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
