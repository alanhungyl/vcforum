const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');

const readUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

const addUser = async (username, password) => {
  const users = readUsers();
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  writeUsers(users);
};

const findUser = (username) => {
  const users = readUsers();
  return users.find(user => user.username === username);
};

const checkPassword = async (username, password) => {
  const user = findUser(username);
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid password');
  }
  return true;
};

module.exports = { addUser, checkPassword };