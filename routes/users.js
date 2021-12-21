const express = require("express");

/// create router
const router = express.Router();
const passport = require('passport');
console.log('user router added in user.js')
    ///user profile controller
const usersController = require('../controllers/users_Controller')
    ///post controller
const postController = require('../controllers/post_Controllers')
    ///

//// profile page route
router.get('/profile', usersController.profile);
//// post page route
router.get('/posts', postController.posts)
router.get('/sign-in', usersController.signIn)
router.get('/sign-up', usersController.signUp)
router.post('/create', usersController.create)
router.post('/create-session', passport.authenticate(
    'local', { failureRedirect: '/users/sign-in' },
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);


module.exports = router;