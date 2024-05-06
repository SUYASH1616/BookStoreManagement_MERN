const express=require('express');
const {connectDb}=require('./controller/connection');
const bookRouter=require("./routes/books");
const nodemailer = require('nodemailer');
const app=express();
const port=5000;
const cors=require('cors');

// payment
const Razorpay=require("razorpay");
const crypto=require('crypto');
require("dotenv").config();
// to connect
connectDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",bookRouter);
app.post("/order",async(req,res)=>{
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
})

app.post("/validate", async (req, res) => {

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    // order_id + " | " + razorpay_payment_id

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature) {
        return res.status(400).json({msg: " Transaction is not legit!"});
    }

    res.json({msg: " Transaction is legit!", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
})
// app.get("/",(req,res)=>{
//     res.send("Hellow World");
// })

app
app.listen(port,()=>{
    console.log(`Server is Listening port ${port}`);
})