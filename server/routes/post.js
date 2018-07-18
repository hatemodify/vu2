const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//add
router.post('/', (req, res) => {
  const db = req.db;
  const title = req.body.title;
  const description = req.body.description;
  const new_post = new Post({
    title: title,
    description: description
  });

  new_post.save(error => {
    error ? console.log(error) : null;
    res.send({
      success: true,
      message: 'Post saved successfully'
    });
  });
});

router.get('/posts:id', (req, res) => {
  Post.find({}, 'title description', (err, posts) => {
    if (err) {
      console.log(err);
    }
    res.send({
      posts: posts
    });
  });
});

router.put('/posts/:id', (req, res) => {
  const db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) {
      console.error(error);
    }

    post.title = req.body.title
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      });
    });
  });
});



/* router.post('/signup', (req, res) => {
  const db = req.db;
  const id = req.body.id;
  const password = req.body.password;
  const addUser = new User({
    id: id,
    password: password
  });

  addUser.save(error => {
    error ? console.log(error) : null;
    res.send({
      success: true,
      message: 'add user successfully'
    });
  });
}); */


router.get('/', (req, res) => {
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

module.exports = router;