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
  var db = req.db;
  console.log(req.params.title)
  // Post.findOne({title: req.params.title}, function (error, post) {
  //   if (error) { console.error(error); }else{
  //     console.log(post);
  //   }
  //   res.send({
  //     post
  //   })
  // })
  Post.find({
    title:req.params.title
  }, 'title content', (err, posts) => {
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


// router.get('/:title', (req, res) => {
//   Post.findOne({ title: req.params.title})
//   .then(console.log(title))


  
  // router.get("/:title", function (req, res) {
  //   Post.findOne({ title: req.params.title }) // 3
  //     .populate("author")               // 3
  //     .exec(function (err, post) {        // 3
  //       if (err) return res.json(err);
  //       res.render("posts/show", { 
  //         post: post 
  //       });
  //     });
  // });


  // Post.findOne(
  //   {
  //     id: req.body.id,
  //     password: cipherPw
  //   },
  //   (err, id, password, user) => {
  //     if (err)
  //       return res.status(500).json({
  //         error: err
  //       });
  //     if (!id)
  //       return res.status(404).json({
  //         error: `${id} : ${password} user not found`
  //       });
  //     res.json(user);
  //   }
  // );
// });

// router.put('/posts/:id', (req, res) => {
//   const db = req.db;
//   Post.findById(req.params.id, 'title description', function(error, post) {
//     if (error) {
//       console.error(error);
//     }

//     post.title = req.body.title;
//     post.description = req.body.description;
//     post.save(function(error) {
//       if (error) {
//         console.log(error);
//       }
//       res.send({
//         success: true
//       });
//     });
//   });
// });

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
