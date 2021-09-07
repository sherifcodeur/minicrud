

const express = require('express');

const router = express.Router();

// controller for products
const productController = require('../controllers/productController');





router.get('/',productController.index);


router.post('/',productController.store);


router.get('/create',productController.create);


module.exports = router ;