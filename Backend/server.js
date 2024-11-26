const express = require('express');
const { addUser, checkPassword } = require('./users');

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    await addUser(username, password);
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    await checkPassword(username, password);
    res.send('Login successful');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});