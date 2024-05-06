import React, { useEffect, useState } from "react";
import { Card } from 'flowbite-react';
import { useNavigate } from "react-router-dom";

const Shop=()=>{
    const navigate=useNavigate();
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-books")
        .then(res=>res.json())
        .then(data=>setbooks(data));
    },[]);

    const handleOnSubmit=(id)=>{
      navigate(`/book/${id}`);
      console.log(id);
    }
    return( 
    <div className="mt-28 px-4 lg:px-24">
        <h2 className="text-5xl font-bold text-center">
        All Books Are Here!
        </h2>

        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {
                books.map(book=><Card
                    className="max-w-sm"
                  >
                    <img src={book.imageUrl} alt="" className="h-96" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     <p>{book.bookTitle}</p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </p>
                    <button onClick={()=>handleOnSubmit(book._id)} className="bg-blue-700 text-white font-semibold py-2">
                    Book Now
                    </button>
                  </Card>)
            }
        </div>
    </div>

    )
}

export default Shop;