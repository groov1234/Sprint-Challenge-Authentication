const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { user } = req;
  new User(user)
    .save()
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('Error Saving User to DataBase');
    });
};

module.exports = {
  createUser
};
