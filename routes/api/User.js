const router = require("express").Router();
const {
  getAll,
  getOne,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getAll).post(createUser);

router.route("/:userId").get(getOne).put(updateUser).delete(deleteUser);

module.exports = router;
