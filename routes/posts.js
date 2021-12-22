const express = require("express");
const router = express.Router();
const postController = require('../controllers/post_Controllers')


router.post('/create', postController.create)

module.exports = router;