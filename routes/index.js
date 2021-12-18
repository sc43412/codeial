const express = require('express');
const homeController = require('../controllers/homeController')
const router = express.Router();
console.log('hello router is connected successfully')
router.get('/', homeController.add);


module.exports = router;