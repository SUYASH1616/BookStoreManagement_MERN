import React from "react";
import axios from "axios"
import './SingleBook.css';
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
    const { bookTitle, imageUrl, authorName, bookDescription, category } = useLoaderData();
    
    
    const paymentHandler = async (event) => {

        const amount = 500;
        const currency = 'INR';
        const receiptId = '1234567890';
        const payment_capture= 1;
    
        const response = await axios.post('http://localhost:5000/order', {
            amount,
            currency,
            receipt: receiptId,
            payment_capture,
        });

        const order = response.data;
        console.log('order', order);
    
          var option = {
            key:"",
            amount,
            currency,
            name:"Web Codder",
            description: "Test Transaction",
            image:"https://i.ibb.co/5Y3m33n/test.png",
            order_id:order.id,
            handler: async function(response) {
          
                const body = {...response,}
      
                const validateResponse = await fetch('http://localhost:5000/validate', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
      
                })
      
                const jsonResponse = await validateResponse.json();
      
                console.log('jsonResponse', jsonResponse);
                
              },
            prefill: {
              name: "Web Coder", 
              email: "webcoder@example.com",
              contact: "8999272775", 
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          }
    
          var rzp1 = new Razorpay(option);
          rzp1.on("payment.failed", function(response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          })
    
          rzp1.open();
          event.preventDefault();
      }
    
    return (
        <div className="flex w-full h-full flex-col md:flex-row bg-teal-100  items-center">
            {/* left side */}
            <div className="mt-28  h-144 md:w-1/3 lg:w-1/4 px-4 lg:px-4 flex flex-col  border border-black rounded-lg mx-2" >
                <div className="flex justify-center">
                    <img src={imageUrl} alt="" className=" mb-3 h-120" />
                </div>
                <button className="bg-blue-700 px-6 py-2 rounded text-white" id="rzp-button1" onClick={paymentHandler} >Buy Now</button>
                
            </div>


            {/* right side */}
            <div className="md:w-3/4 flex flex-col items-center rounded">
                <div className="md:w-3/4">
                    <div className="flex flex-row justify-center h-screen-40  " style={{ height: "12rem" }}>
                        <p class="text-xl md:text-xl lg:text-3xl mt-28 text-blue-700">{bookTitle}</p>
                    </div>
                    <div className="flex flex-row justify-between" style={{ height: "5rem" }}>

                        <p className="text-base md:text-lg lg:text-xl font-sans ">Author : {authorName}</p>
                        <p className="text-base md:text-lg lg:text-xl font-sans">Category : {category}</p>
                    </div>
                    <div >
                        <p className="text-base font-bold md:text-lg lg:text-xl font-sans">Description :</p>
                        <p className="text-base md:text-lg lg:text-xl mt-1" style={{ fontFamily: "Roboto, sans-serif" }} >{bookDescription}</p>
                        
                    </div>
                    <div>
                    <p className="text-base text-bold md:text-lg lg:text-xl mt-1 mt-10 bg-green-500 w-1/4 rounded flex flex-row justify-center h-10 items-center mb-3" >Price : Rs 100</p>
                    </div>
                </div>

            </div>
        </div>  

    )
}

export default SingleBook;
