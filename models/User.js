const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
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
        validator: function (email) {
          // regex for validating user's email
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
      // tells mongoose that it should use getter functions we've specified
      getters: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;
