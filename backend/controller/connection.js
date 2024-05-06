const mongoose=require('mongoose');

async function connectDb(){
        mongoose.connect("mongodb+srv://mern-book-store:asSpfd5t3zFknMf8@cluster0.bnziuvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("Database Connected with server!"))
    .catch((err)=>console.log(err))

}

module.exports={connectDb};