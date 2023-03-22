const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add-product", cartController.add);
router.post("/get-products", cartController.getCart);
router.patch("/update-user-cart-item", cartController.updateUserCartItem);

module.exports = router;
