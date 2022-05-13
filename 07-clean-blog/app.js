const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); // güncelleme yaparken put işlemini post ile simule etmnek için
const postController = require('./controllers/postControllers.js');
const pageController = require('./controllers/pageControllers.js');

const app = express();

//connect db
mongoose
  .connect(
    'mongodb+srv://fatih:WfXmT8dZFePbl5ck@cluster0.2tn9h.mongodb.net/clean-blog?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('MongoDB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] })); // gerektiğinde hangi metotların override edileceği expilicit-ayrıca belirtildi--delete işlemi bir get işlemi

//ROUTES
// get all posts
app.get('/', postController.getAllPosts);
// get post
app.get('/posts/:id', postController.getPost);
// get about page
app.get('/about', pageController.getAboutPage);
// get add post page
app.get('/add_post', pageController.getAddPostPage);
// get edit page
app.get('/posts/edit/:id', pageController.getEditPage);
// create post
app.post('/posts', postController.createPost);
// update post
app.put('/posts/:id', postController.updatePost);
// delete post
app.delete('/posts/:id', postController.deletePost);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on ${port} port..`);
});
