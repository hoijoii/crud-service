const express = require("express")
const router = express.Router();
const categoryController = require("./controller");

router.get("/list", categoryController.getCategories)

module.exports = router;