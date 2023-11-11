const express = require('express');
const router = express.Router();
const userProfileController = require('../Controllers/userprofileController');
const cookieParser = require('cookie-parser');
router.use(cookieParser());



router.get('/userInfo' , userProfileController.information);
router.get('/wishlist', userProfileController.wishlist);
router.get('/history', userProfileController.history);
router.post('/addwishlist/:id', userProfileController.addtowishlist);
router.put('/edituser', userProfileController.editInformation);
router.delete('/editwishlist/:id', userProfileController.editWishlist);
router.post('/logout', userProfileController.logout);



module.exports = router;