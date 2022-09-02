const { User } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .select('-__v')
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  getOneUser({ params }, res) {
    User.findOne({ _id: params.id })
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
};

module.exports = userController;
