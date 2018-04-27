const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);
  

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/users/user/:name"
router
  .route("/user/:username")
  .get(userController.findByName)

// Matches with "/api/users/recipient/:name"
router
  .route("/recipient/:username")
  .get(userController.findRecipient)



module.exports = router;