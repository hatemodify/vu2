const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userModel = {  
  id: {
    type: String,
    required: [true, 'you have to insert id'],
    trim: true,
    unique: [true, 'nested id']
  },
  password: {
    type: String,
    required: [true, 'you have to insert password'],
    trim: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  scraps: {
    type: Array
  },
  interest: [],
  likes: [],
  dislikes: [],
  wards: [],
  posts: [],
  comments: []
};
const userSchema = new Schema(userModel);

module.exports = mongoose.model('user', userSchema);