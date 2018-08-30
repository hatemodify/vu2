const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userid:String,
  title:String,
  description:String,
  files:String
});


const Post = mongoose.model('post' ,PostSchema);
module.exports = Post;