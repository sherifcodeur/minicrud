

const express = require('express');

const router = express.Router();

// controller for products
const productController = require('../controllers/productController');



// all the routes for the ressource Product

router.get('/',productController.index);

router.get('/create',productController.create);

router.post('/',productController.store);

router.get('/:id/edit',productController.edit);

router.get('/:id/delete',productController.destroy);

router.get('/:id',productController.show);

router.put('/:id',productController.update);









module.exports = router ;