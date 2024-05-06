
const bookModel=require("../models/books");
const nodemailer = require('nodemailer');

async function handleUploadBook(req,res){
    const data=req.body;
    try{
        if(!data.bookTitle || !data.authorName || !data.imageUrl || !data.category || !data.bookDescription ||!data.bookpdfUrl){
            return res.status(400).send({error:"Some field is missing"});
        }
        const result=await bookModel.create({
            bookTitle:data.bookTitle,
            authorName:data.authorName,
            imageUrl:data.imageUrl,
            category:data.category,
            bookDescription:data.bookDescription,
            bookpdfUrl:data.bookpdfUrl
        });
        res.status(201).send({message:"Data Uplaoded!"})
    }catch(err){
        res.status(500).send({error:"Error is occured"});
    }
}

async function handleGetAllBooks(req, res) {
    try {
       let query={};
       if(req.query.category){
            query={category:req.query.category}
       }
       else if(req.query.authorName){
            query={authorName:req.query.authorName}
       }else if(req.query.bookTitle){
            query={bookTitle:req.query.bookTitle}
       }
        const result = await bookModel.find(query); 
        if (result.length === 0) {
            res.status(404).send({ message: "No books found" }); 
        } else {
            res.status(200).send(result); 
        }
    } catch (err) {
      
        res.status(500).send({ error: "An error occurred while fetching books" }); 
    }
}


async function handleGetBook(req, res) {
    try {
        const result = await bookModel.findOne({ _id: req.params.id });
        if (result) {
            res.status(200).send(result); 
        } else {
            res.status(404).send({ error: "Book not found" }); 
        }
    } catch (err) {
        // console.error("Error fetching book:", err);
        res.status(500).send({ error: "An error occurred while fetching the book" }); 
    }
}



async function handleUpdateBook(req,res){
    const id=req.params.id;
    const data=req.body;
    // console.log(id);
    try{
        
        if(!data.bookTitle || !data.authorName || !data.imageUrl || !data.category || !data.bookDescription ||!data.bookpdfUrl){
            return res.status(400).send({error:"Some feild are missing"});
        }
        // console.log(data);
        const result=await bookModel.findByIdAndUpdate(id,{$set:data});
        // console.log(result);
        res.status(202).send({message:"Updated!!"})
    }catch(err){
        res.status(500).send({error:"Internal server error.Not updated"});
    }
}

async function handleDeleteBook(req,res){
    const id=req.params.id;
    console.log(id)
    try{
        const result=await bookModel.deleteOne({_id:id});
        if(!result){
            return res.status(400).send({error:"Entry not found"});
        }
        res.status(200).send({messge:"Deleted"});
    }catch(error){
        res.status(500).send({error:"internal server error and can not delete"})
    }
}

const handleContact=async(req,res)=>{
    try{
        const data=req.body;
        console.log(data);
        if(!data.email || !data.name || !data.phone ||!data.opinion){
            res.status(400).sned({Message:"Bad request"});
        }
        // Send email to admin
        await sendEmailToAdmin(data.email, data.name, data.phone, data.opinion);

        // Send thank you email to sender
        await sendThankYouEmail(data.email);
        res.status(200).send({message:"Submitted"});
    }catch(error){
        console.log('error is',error);
        res.status(500).send({message:"Internal Server Error"});
    }
}

// to admin
// Function to send email to admin
async function sendEmailToAdmin(email, name, phone, opinion) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'wildlifewondersunveiled@gmail.com',
            pass: 'ialjcgryxzvcecgs',
        },
    });

    const mailOptions = {
        from: 'wildlifewondersunveiled@gmail.com', // Your Gmail address
        to: 'suyashmali16@gmail.com', // Admin email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOpinion: ${opinion}`
    };

    await transporter.sendMail(mailOptions);
}

// to send tank u mail
async function sendThankYouEmail(email) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'wildlifewondersunveiled@gmail.com',
          pass: 'ialjcgryxzvcecgs',
        },
    });

    const mailOptions = {
        from: 'wildlifewondersunveiled@gmail.com', // Your Gmail address
        to: email, // Sender's email
        subject: 'Thank you for contacting us',
        text: 'Thank you for contacting us. We will get back to you as soon as possible.'
    };

    await transporter.sendMail(mailOptions);
}
module.exports={handleUploadBook,
    handleGetAllBooks,
    handleUpdateBook,
    handleGetBook,
    handleDeleteBook,
    handleContact,
}