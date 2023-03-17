const express = require("express")
const router = express.Router();
const postController = require("./controller");
//파일업로드 (나중에)
/* const multer = require('multer')
const upload = multer({dest: './upload'}) */

router.get("/list", postController.getPosts)
//router.post("/create", postController.createPost)

module.exports = router;