const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  
  findByName: function(req, res) {
    db.User
      .findOne({username: req.params.username})
      .then(dbUser => {
        req.session.user = dbUser;
        
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },

  findRecipient: function(req, res) {
    db.User
      .findOne({username: req.params.username})
      .then(dbUser => {
        
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const user = {
      _id: req.body._id,
      username: req.body.username,
      password: req.body.password,
      image: req.body.image,
      score: 0
   }
    db.User
      .create(user)
      .then(dbUser => {
        req.session.user = dbUser;
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.User
      .findOneAndUpdate({ username: req.params.username }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};


