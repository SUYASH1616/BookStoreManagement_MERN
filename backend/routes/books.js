const express=require("express");
const { handleUploadBook, 
    handleGetAllBooks, 
    handleUpdateBook,
    handleGetBook,
    handleDeleteBook,
    handleContact
                                                            
} = require("../controller/books");
const router=express.Router();

router.post("/upload-book",handleUploadBook);
router.get("/all-books",handleGetAllBooks);
router.get("/book/:id",handleGetBook)
router.patch("/book/:id",handleUpdateBook);
router.delete("/book/:id",handleDeleteBook)
router.post("/contact",handleContact);
module.exports=router;

