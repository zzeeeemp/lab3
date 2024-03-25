const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


const requestLogger = (req, res, next) => {
  const currentDate = new Date().toISOString();
  console.log(`Request ${req.method} on path ${req.url} ${currentDate}`);
  next();
};


app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger); 


let students = [];


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


app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ADD-STUDENT</title>
      </head>
      <body>
        <form action="/student" method="POST">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName"><br><br>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName"><br><br>
          <label for="course">Course:</label>
          <input type="text" id="course" name="course"><br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});


app.post('/student', (req, res) => {
  const { firstName, lastName, course } = req.body;
  students.push({ firstName, lastName, course });
  res.send(`Hello, ${firstName} ${lastName} on ${course} studies!`);
});

app.get('/users', (req, res) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li><p>${student.firstName} ${student.lastName} - ${student.course}</p></li>`;
  });
  userList += '</ul>';
  res.send(userList);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
