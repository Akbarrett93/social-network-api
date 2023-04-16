const router = require("express").Router();
const userRoutes = require("./Users");
const thoughtRoutes = require("./Thoughts");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
