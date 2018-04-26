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
  .put(roastController.update)
  .delete(roastController.remove);

// Matches with "/api/roasts/users/:roastr"
router
  .route("/users/:roastr")
  .get(roastController.findYourRoasts);

// Matches with "/api/roasts/users/pending/:roastr"
router
  .route("/users/pending/:roastr")
  .get(roastController.findYourPendings);

  
module.exports = router;