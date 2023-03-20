const express=require('express');
const router=express.Router();
const cartController=require("../controllers/cartController");

router.post('/add-product',cartController.add);
router.post('/get-products',cartController.get);


module.exports=router;