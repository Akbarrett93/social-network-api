const router = require("express").Router();
const {
  getAll,
  getOne,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getAll).post(createThought);

router
  .route("/:thoughtId/")
  .put(getOne)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reaction").put(createReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
