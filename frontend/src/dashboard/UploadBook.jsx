// import  {useState} from 'react'
import React from "react";
import { useState } from "react";
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

export const UploadBook = () => {
    const bookCategories=[
        "Fiction","Non-Fiction","Mistery","Programming","Science Fiction","Comics","Fantasy","Horror","Biography","Autobiography","History","Self-help","Business","Education","Childern Books","Travel","Religion","Art and Design"
    ]

    const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);

    const handleChangeSelectedValue=(event)=>{
        console.log(event.target.vlaue);
        setSelectedBookCategory(event.target.value);
    }

    // handle book submission
    const handleBookSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const bookTitle=form.bookTitle.value;
        const authorName=form.authorName.value;
        const imageUrl=form.imageUrl.value;
        const category=form.category.value;
        const bookDescription=form.bookDescription.value;
        const bookpdfUrl=form.bookpdfUrl.value;

        const bookObj={
            bookTitle,authorName,imageUrl,category,bookDescription,bookpdfUrl
        }

        // console.log(bookObj);
        // console.log(authorName);
        // send
        fetch("http://localhost:5000/upload-book",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(bookObj)
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Book Uploaded Successfully!!")
            form.reset();
        })
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>
            Upload A Book
        </h2>
        <form   onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
           {/* first Row */}
           <div className='flex gap-8'>
                 {/* Book name */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="bookTitle" value="Book Title" />
                    </div>
                    <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
                    
                </div>
                {/* Author name */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="authorName" value="Author Name" />
                    </div>
                    <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
                </div>
           </div>

            {/* sceond Row */}
            <div className='flex gap-8'>
                 {/* Book name */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label htmlFor="imageUrl" value="Book image url" />
                    </div>
                    <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book image url" required />
                    
                </div>
                {/* Category */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="inputState" value="Book Category" />
                    </div>
                    
                <Select id="inputState" name="category" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue} >
                    {
                        bookCategories.map((option)=> <option key={option}>{option}</option>)
                    }
                    
                </Select>

                </div>
           </div>

           {/* third row  Description*/}
           <div>
                 {/* Book name */}
                <div >
                    <div className="mb-2 block">
                    <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea className="w-full" id="bookDescription" name="bookDescription" placeholder="Write Your book description..." required rows={6} />
                </div>
            </div>

            {/* Fourth Rowbook pdf Link  */}
            <div>
                 {/* Book name */}
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="bookpdfUrl" value="Book PDF Url" />
                    </div>
                    <TextInput className="w-full" id="bookpdfUrl" name=" bookpdfUrl" type="text" placeholder="Book PDF Url" required />                   
                </div>
            </div>

            <Button type="submit" className="mt-5">
                Upload Book
            </Button>
        </form>
    </div>

  )
}
