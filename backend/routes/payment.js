const express=require("express");
const { handleOrder, handleValidate } = require("../controller/payment");
const router=express.Router();

router.post("/order",handleOrder);
router.post("/validate",handleValidate);

module.exports=router;