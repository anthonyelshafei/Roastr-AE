const router = require("express").Router();
const roastRoutes = require("./roasts");
const userRoutes = require("./users");

router.use("/roasts", roastRoutes);
router.use("/users", userRoutes);

module.exports = router;