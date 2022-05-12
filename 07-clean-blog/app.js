const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); // güncelleme yaparken put işlemini post ile simule etmnek için
const app = express();
const ejs = require('ejs');
const Post = require('./models/Post');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');

//connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// set view engine w ejs
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'], // gerektiğinde hangi metotların override edileceği expilicit-ayrıca belirtildi--delete işlemi bir get işlemi
  })
);

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


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalıştırılmaya başlandı...`);
});
