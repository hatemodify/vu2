const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author:String,
  title:String,
  tag:String,
  content:String,
  files:String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  like: Number,
});


const Post = mongoose.model('post' ,PostSchema);
module.exports = Post;