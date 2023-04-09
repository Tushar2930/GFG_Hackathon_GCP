const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .post("/create", userController.create)
  .post("/getUser", userController.getUser)
  .patch("/updateUser", userController.updateUser);

router.post('/get-user-products',userController.getUserProducts)
router.post('/get-user-rent',userController.getUserRent)
module.exports = router;
