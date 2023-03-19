const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .post("/create", userController.create)
  .get("/getAllUser", userController.getAllUser)
  .patch("/updateUser", userController.updateUser);

module.exports = router;
