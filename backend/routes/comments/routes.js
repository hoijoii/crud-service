const express = require("express")
const router = express.Router();
const commentController = require("./controller");

router.get("/list/:id", commentController.getComments)

module.exports = router;