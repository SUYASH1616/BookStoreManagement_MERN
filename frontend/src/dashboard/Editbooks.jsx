import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from "react";
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import axios from "axios";
export const EditBooks = () => {
  const {id}=useParams();
  // to set default values
  const {bookTitle,authorName,imageUrl,category,bookDescription,bookpdfUrl}=useLoaderData();
  // console.log(useLoaderData());
  const bookCategories=[
    "Fiction","Non-Fiction","Mistery","Programming","Science Fiction","Comics","Fantasy","Horror","Biography","Autobiography","History","Self-help","Business","Education","Childern Books","Travel","Religion","Art and Design"
]

const [selectedBookCategory,setSelectedBookCategory]=useState(category);

const handleChangeSelectedValue=(event)=>{
    // console.log(event.target.vlaue);
    setSelectedBookCategory(event.target.value);
}

// handle book submission
const handleUpdate = async (event) => {
  try {
    event.preventDefault();
    
    // Accessing form data
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookpdfUrl = form.bookpdfUrl.value;

    // Creating book object
    const bookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookpdfUrl
    };
    console.log("hi");
    // Making PATCH request to update book data
    await axios.patch(`http://localhost:5000/book/${id}`, bookObj);

    // Showing success message to the user
    alert("Data is updated successfully!");
    // fetch(`http://localhost:5000/book/${id}`,{
    //   method:"PATCH",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(bookObj)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //   alert("data Uploaded!");
    //   form.reset();
    // })
  } catch (error) {
    // Handling errors
    console.log("Error:", error);
    alert("An error occurred while updating data. Please try again later.");
  }
}

return (
<div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>
        Update the Book data 
    </h2>
    <form   onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
       {/* first Row */}
       <div className='flex gap-8'>
             {/* Book name */}
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
                </div>
                <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required  defaultValue={bookTitle}/>
                
            </div>
            {/* Author name */}
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
                </div>
                <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required defaultValue={authorName} />
            </div>
       </div>

        {/* sceond Row */}
        <div className='flex gap-8'>
             {/* Book name */}
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                <Label htmlFor="imageUrl" value="Book image url" />
                </div>
                <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book image url" required  defaultValue={imageUrl}/>
                
            </div>
            {/* Category */}
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                    <Label htmlFor="inputState" value="Book Category" />
                </div>
                
            <Select id="inputState" name="category" className='w-full rounded'  value={selectedBookCategory} onChange={handleChangeSelectedValue} >
                {
                    bookCategories.map((option)=> <option key={option}>{option}</option>)
                }
                
            </Select>

            </div>
       </div>

       {/* third row  Description*/}
       <div>
             {/* Book description */}
            <div >
                <div className="mb-2 block">
                <Label htmlFor="bookDescription" value="Book Description" />
                </div>
                <Textarea className="w-full" id="bookDescription" name="bookDescription" placeholder="Write Your book description..." required rows={6} defaultValue={bookDescription}/>
            </div>
        </div>

        {/* Fourth Rowbook pdf Link  */}
        <div>
             {/* Book pdf url */}
            <div>
                <div className="mb-2 block">
                <Label htmlFor="bookpdfUrl" value="Book PDF Url" />
                </div>
                <TextInput className="w-full" id="bookpdfUrl" name=" bookpdfUrl" type="text" placeholder="Book PDF Url" required value={bookpdfUrl} />                   
            </div>
        </div>

        <Button type="submit" className="mt-5">
            Update Book
        </Button>
    </form>
</div>

)

}
