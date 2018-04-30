const db = require("../models");
 
 // Defining methods for the roastController
 module.exports = {
   findAll: function(req, res) {
     db.Roast

      .find({replied: true})
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
   findYourRoasts: function(req, res) {
     db.Roast
       .findYourRoasts({roastr: req.params.roastr})
       .then(dbRoast => res.json(dbRoast))
       .catch(err => res.status(422).json(err));
   },
   getPendings: function(req, res) {
     db.Roast
       .find({roastrName: req.params.name, reply: ""})
       .then(dbRoast => res.json(dbRoast))
       .catch(err => res.status(422).json(err));
   },
   getInbox: function(req, res) {
     db.Roast
       .find({recipientName: req.params.name, reply: ""})
       .then(dbRoast => res.json(dbRoast))
       .catch(err => res.status(422).json(err));
   },
   create: function(req, res) {
     const roast = {
       roastrName: req.body.roastrName,
       roastrImage: req.body.roastrImage,
       roastrScore: req.body.roastrScore,
       recipientName: req.body.recipientName,
       recipientImage: req.body.recipientImage,
       recipientScore: req.body.recipientScore,
       roast: req.body.roast,
       reply: req.body.reply,
       roastScore: 0,

      replyScore: 0,
     };
     db.Roast
       .create(roast)
       .then(dbRoast => res.json(dbRoast))
       .catch(err => res.status(422).json(err));
   },
   updateRoast: function(req, res) {
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

