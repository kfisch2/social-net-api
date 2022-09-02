const { Schema, model } = require('mongoose');
// const { Thought } = require('./Thought');

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
    validate: {
      validator: function (e) {
        // regex for validating user's email
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e);
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  // thoughts: [Thought],
});

const User = model('User', userSchema);

User.create({
  username: 'kfisch',
  email: 'something@yahoo.com',
  // thoughts: [],
});

module.exports = User;
