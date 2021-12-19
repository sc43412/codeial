const express = require("express");

/// create router
const router = express.Router();
console.log('user router added in user.js')
    ///user profile controller
const usersController = require('../controllers/users_Controller')
    ///post controller
const postController = require('../controllers/post_Controllers')
    //// profile page route
router.get('/profile', usersController.profile);
//// post page route
router.get('/posts', postController.posts)


module.exports = router;