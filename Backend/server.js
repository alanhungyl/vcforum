const express = require('express');
const cors = require('cors');
const { addUser, checkPassword, findUser } = require('./users/users.js');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Store posts array
let posts = [];

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// Create post endpoint
app.post('/api/posts', (req, res) => {
  try {
    console.log('Received post request:', req.body); // Debug log

    const { title, content, author } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author: author || 'Anonymous',
      comments: [],
      timestamp: new Date().toISOString()
    };

    posts.unshift(newPost);
    console.log('Created new post:', newPost); // Debug log
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error); // Debug log
    res.status(500).json({ error: error.message });
  }
});

// Get posts endpoint
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts/:postId/comments', (req, res) => {
  try {
    const { postId } = req.params;
    const { text, author } = req.body;
    
    const post = posts.find(p => p.id === parseInt(postId));
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (!text) {
      return res.status(400).json({ error: 'Comment text is required' });
    }

    const newComment = {
      id: uuidv4(), // Generate a unique ID for the comment
      text,
      author,
      timestamp: new Date().toISOString()
    };

    post.comments.push(newComment);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
    
    // Get user data from database/storage
    const user = await findUser(username); 
    
    // Send back user data
    res.json({
      message: 'Login successful',
      major: user.major,
      college: user.college,
      yearOfAdmission: user.yearOfAdmission
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Available routes:');
  console.log('POST /api/posts - Create a new post');
  console.log('GET /api/posts - Get all posts');
});