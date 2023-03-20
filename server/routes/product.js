const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.post('/sell-add',productController.create)
router.get('/get-products',productController.getAllProducts);
module.exports = router; 
