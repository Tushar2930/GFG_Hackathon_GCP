
const express=require('express');
const router=express.Router();
const orderController=require('../controllers/orderController');

router.post('/checkout',orderController.checkout);
router.post('/verify',orderController.verify);

module.exports=router;
