const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));
router.use("/product", require("./product"));
router.use("/cart",require("./cart"));

module.exports = router;

// const express=require('express');
// const router=express.Router();

// module.exports=router;
