const { Schema, model } = require('mongoose');
const { Thought } = require('./Thought');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  thoughts: [Thought],
});

const User = model('User', userSchema);

User.create({
  username: 'kfisch2',
  email: 'something@gmail.com',
  thoughts: [],
});

module.exports = User;
