const express = require('express');
const bodyParesr = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('../models/post');


mongoose.connect('mongodb://localhost:27017/posts');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', (callback) => {
  console.log('connection success');
});

const app = express();

app.use(morgan('combined'));
app.use(bodyParesr.json());
app.use(cors());




//add 
app.post('/posts', (req, res) => {
  const db = req.db;
  const title = req.body.title;
  const description = req.body.description;
  const new_post = new Post({
    title: title,
    description: description
  });

  new_post.save((error) => {
    error ? console.log(error) : null;
    res.send({
      success: true,
      message: 'Post saved successfully'
    })
  })
});

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', (err, posts) => {
    if (err) {
      console.log(err);
    }
    res.send({
      posts: posts
    });
  }).sort({
    _id: -1
  });
});


app.get('/posts:id', (req, res) => {
  Post.find({}, 'title description', (err, posts) => {
    if (err) {
      console.log(err);
    }
    res.send({
      posts: posts
    });
  });
});




app.listen(process.env.PORT || 8081);