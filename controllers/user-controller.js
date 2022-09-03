const { User } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  getOneUser({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with that id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  updateUser({ body, params }, res) {
    User.findOneAndUpdate({ _id: params.id }, body)
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with that id' });
          return;
        }
        res.json('successfully updated');
      })
      .catch((err) => res.json(err));
  },
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with that id' });
          return;
        }
        res.json('user deleted successfully');
      })
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
