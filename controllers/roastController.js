const db = require("../models");

// Defining methods for the roastController
module.exports = {
  findAll: function(req, res) {
    db.Roast
      .find(req.query)
      .sort({ date: -1 })
      .then(dbRoast => res.json(dbRoast))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Roast
      .findById(req.params.id)
      .then(dbRoast => res.json(dbRoast))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const roast = {
      _id: req.body._id,
      roastr: req.body.roastr,
      recipient: req.body.recipient,
      roast: req.body.roast,
      reply: req.body.roast,
      roastScore: 0,
      replyScore: 0
    };
    db.Roast
      .create(roast)
      .then(dbRoast => res.json(dbRoast))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Roast
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbRoast => res.json(dbRoast))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Roast
      .findById({ _id: req.params.id })
      .then(dbRoast => dbRoast.remove())
      .then(dbRoast => res.json(dbRoast))
      .catch(err => res.status(422).json(err));
  }
};
