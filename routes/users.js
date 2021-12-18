const express = require("express");


const router = express.Router();
console.log('user router added in user.js')
const usersController = require('../controllers/users_Controller')
const postController = require('../controllers/post_Controllers')

router.get('/profile', usersController.profile);
router.get('/posts', postController.posts)


module.exports = router;