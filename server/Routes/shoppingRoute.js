const express = require('express');
const router = express.Router();
const shoppingController = require('../Controllers/shoppingController');


router.post('/addtocart/:id',shoppingController.addtocart);
router.get('/shoppingcart',shoppingController.getcartproducts);
router.delete('/product/delete/:id', shoppingController.deleteproduct);
router.get('/shoppingcart/totalprice', shoppingController.totalprice);
router.post('/shoppingcart/checkout', shoppingController.createCheckoutSession);
router.post('/booking', shoppingController.postbooking);
router.get('/getbooking', shoppingController.getbooking);


module.exports = router;