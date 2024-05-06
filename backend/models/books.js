const mongoose=require("mongoose");

const booksSchema=mongoose.Schema({
    bookTitle:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    bookDescription:{
        type:String,
        required:true,
    },
    bookpdfUrl:{
        type:String,
        required:true,
    }
});

const bookModel=mongoose.model("books",booksSchema);

module.exports=bookModel;