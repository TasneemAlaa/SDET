
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

let user = {
  id: 46643,
  name: 'user',
  email: 'user@gmail.com',
  password: 'user123',
  imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
};

// Route for authenticating users
app.post('/api/v1/auth', (req, res) => {
  // Mock token generation
  const token = 'eyJhbGciOiJI...';
  res.json({ token });
});

// Route for creating users
app.post('/api/v1/users', (req, res) => {
  // Mock user creation
  const newUser = req.body;
  res.status(201).json({ message: 'User registered with success', token: 'eyJhbGciOiJI...' });
});

// Route for retrieving users
app.get('/api/v1/users', (req, res) => {
  // Mock user retrieval
  res.json(user);
});

// Route for updating users
app.patch('/api/v1/users', (req, res) => {
  // Mock user update
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  res.json({ message: 'User updated with success' });
});

// Route for deleting users
app.delete('/api/v1/users', (req, res) => {
  // Mock user deletion
  user = null;
  res.json({ message: 'User deleted with success' });
});

// Route for deleting all users
app.delete('/api/v1/all-users', (req, res) => {
  // Mock deletion of all users
  user = null;
  res.json({ message: 'Users deleted with success' });
});


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Mock server is running on port ${PORT}`);
});

module.exports = server;