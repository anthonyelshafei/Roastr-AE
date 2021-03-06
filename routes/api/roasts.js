const router = require("express").Router();
const roastController = require("../../controllers/roastController");

// Matches with "/api/roasts"
router.route("/")
  .get(roastController.findAll)
  .post(roastController.create);

// Matches with "/api/roasts/:id"
router
  .route("/:id")
  .get(roastController.findById)
  .put(roastController.updateRoast)
  .delete(roastController.remove);

// Matches with "/api/roasts/users/:roastr"
router
  .route("/users/:roastr")
  .get(roastController.findYourRoasts);

// Matches with "/api/roasts/users/pending/:name"
router
  .route("/users/pending/:name")
  .get(roastController.getPendings);
// Matches with "/api/roasts/users/inbox/:name"
router
  .route("/users/inbox/:name")
  .get(roastController.getInbox);

  
module.exports = router;