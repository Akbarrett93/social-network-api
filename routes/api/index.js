const router = require("express").Router();
const userRoutes = require("./User");
const thoughtRoutes = require("./Thought");

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;
