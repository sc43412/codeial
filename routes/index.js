const express = require('express');
const homeController = require('../controllers/home_Controller')
const router = express.Router();


console.log('hello router is connected successfully')
router.get('/', homeController.add);
router.use('/users', require('./users'));


module.exports = router;