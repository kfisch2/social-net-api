const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
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
          return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
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
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
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

UserSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.reduce(
    (total, thought) => total + thought.reactions.length + 1, 0);
});

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const User = model('User', UserSchema);
module.exports = User;
