const express = require('express');
const bodyParesr = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('../models/post');
const User = require('../models/user');
const DB_SETTING = require('./dbsetting');



const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('602cd3b6051a451d8e99935b8e7cad01');

// mongoose.connect('mongodb://localhost:27017/news');

mongoose.connect(DB_SETTING);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', callbak => {
  console.log('db connection success');
});

const app = express();

app.use(morgan('combined'));
app.use(bodyParesr.json());
app.use(cors());
app.use('/user', require('../routes/user'));
app.use('/posts', require('../routes/post'));


app.get('/news', (req, res) => {
  console.log(req.headers)
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
    .catch(err => res.send('Ops, something has gone wrong'));
});

app.get('/search/:query', (req, res) => {
  const query = req.params.query;
  console.log(query);
  getNewsSearch(query)
    .then((result) =>
      res.send({
        result
      })
    )
    .catch(err => res.send('Ops, something has gone wrong'));
});

app.put('/scrap', (req, res) => {
  const db = req.db;
  const scrap = req.body.scrap;
  const userId = req.body.userId;
  User.findOneAndUpdate({
    id: userId
  }, {
    $push: {
      scraps: scrap
    }
  }, (success) => {
    console.log('success');
  });
});

app.get('/myscrap', (req, res) => {
  const userId = req.headers.userid;
  console.log(userId)
  User.find({id:userId} , (err, data) => {
    console.log(data)
    if(err){
      console.log(err);
    }
    res.send({
      data:data[0].scraps
    })    
  }).sort({
    _id: -1
  });
});

function getNewsList(cate) {
  return new Promise((resolve, reject) => {
    newsapi.v2
      .topHeadlines({
        category: cate,
        language: 'ko',
        country: 'kr',
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
        q: query,
        pageSize: 20,
        language: 'ko',
      })
      .then(res => res.articles)
      .then(data => resolve(data))
      .catch(err => console.log(err));
  });
}



app.listen(process.env.PORT || 9000);