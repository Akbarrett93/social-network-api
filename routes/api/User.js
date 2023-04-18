const router = require("express").Router();
const {
  getAll,
  getOne,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getAll).post(createUser);

router.route("/:userId").get(getOne).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;
