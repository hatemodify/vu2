const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//add
router.post('/', (req, res) => {
  const db = req.db;
  const title = req.body.title;
  const tag = req.body.tag;
  const author = req.body.author;
  const content = req.body.content;
  const new_post = new Post({
    title,
    author,
    tag,
    content
  });

  new_post.save(error => {
    error ? console.log(error) : null;
    res.send({
      success: true,
      message: 'Post saved successfully'
    });
  });
});

router.get('/:title', (req, res) => { 
  Post.findOne({ 
    title:req.params.title 
  } , 'title author tag content', (err, posts) => {
    if (err) {
      console.log(err);
    }
    console.log(posts)
    res.send({
      posts
    });
  })
});


router.get('/', (req, res) => {
  Post.find({}, 'title author createdDate content tag', (err, posts) => {
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
