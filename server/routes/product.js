const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router
  .route("/product")
  .post(productController.create)
  .get(productController.getAllProducts);

module.exports = router;
