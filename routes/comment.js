const express= require('express');
// const express = require("express");
const router = express.Router();
const passport = require('passport');
const commentController = require('../controllers/comment_controller')


router.post('/create',passport.checkAuthentication ,commentController.create)
router.get('/destroy/:deleteuid',passport.checkAuthentication,commentController.destroy);

module.exports = router;