const express = require("express");
const bodyParesr = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Post = require("../models/post");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("602cd3b6051a451d8e99935b8e7cad01");

mongoose.connect("mongodb://localhost:27017/posts");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

db.once("open", callback => {
  console.log("connection success");
});

const app = express();

app.use(morgan("combined"));
app.use(bodyParesr.json());
app.use(cors());

//add
app.post("/posts", (req, res) => {
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
      message: "Post saved successfully"
    });
  });
});

app.get("/posts:id", (req, res) => {
  Post.find({}, "title description", (err, posts) => {
    if (err) {
      console.log(err);
    }
    res.send({
      posts: posts
    });
  });
});


app.put('/posts/:id', (req, res) => {
  var db = req.db;
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
      })
    })
  })
})




app.get("/posts", (req, res) => {
  Post.find({}, "title description", (err, posts) => {
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


app.get("/news", (req, res) => {
  Promise.all([
      getNewsList(`business`),
      getNewsList(`sports`),
      getNewsList(`entertainment`),
      getNewsList(`general`),
      getNewsList(`health`),
      getNewsList(`science`)
    ])
    .then(([business, sports, entertainment, general, health, science]) =>
      res.send({
        news: {
          business,
          sports,
          entertainment,
          general,
          health,
          science,
        }
      })
    )
    .catch(err => res.send("Ops, something has gone wrong"));
});

app.get('/news/search/:query', (req, res) => {
  const query = req.params.query;
  console.log(query);
  getNewsSearch(query)
    .then((result) =>
      res.send({
        result
      })
    )
    .catch(err => res.send("Ops, something has gone wrong"));
});


function getNewsList(cate) {
  return new Promise((resolve, reject) => {
    newsapi.v2
      .topHeadlines({
        category: cate,
        language: "ko",
        country: "kr",
        pageSize: 1
      })
      .then(res => res.articles[0])
      .then(data => resolve(data))
      .catch(err => console.log(err));
  });
}

function getNewsSearch(query) {
  return new Promise((resolve, reject) => {
    newsapi.v2
      .everything({
        language: 'ko',
        q: query,
        pageSize: 20
      })
      .then(res => res.articles)
      .then(data => resolve(data))
      .catch(err => console.log(err));
  });
}


app.listen(process.env.PORT || 9000);