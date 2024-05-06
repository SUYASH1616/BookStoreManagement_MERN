

const Razorpay=require("razorpay");
const crypto=require('crypto');
require("dotenv").config();

const handleOrder=async(req,res)=>{
    try{
        const razopay=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_SECRET
        });
         
        const options=req.body;
        // console.log(options);
        const order=await razopay.orders.create(options);

        if(!order){
            res.status(400).send({message:"Bad request"});
        }
        // console.log("in1")
        res.status(200).send(order);
    }catch(error){
        console.log("Error",error);
        res.status(500).send({message:"Internal server Error"});
    }
}

const handleValidate=async(req,res)=>{
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    // order_id + " | " + razorpay_payment_id

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature) {
        return res.status(400).json({msg: " Transaction is not legit!"});
    }

    res.json({msg: " Transaction is legit!", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
}

module.exports={handleOrder,handleValidate}
