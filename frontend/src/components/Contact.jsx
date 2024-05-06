import React from 'react'


import { Button, Carousel, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
export const Contact = () => {

    const handleContact = async (event) => {
        try {
            event.preventDefault();

            const form = event.target;

            const email = form.email.value;
            const name = form.email.value;
            const phone = form.phone.value;
            const opinion = form.opinion.value;

            const postObj = {
                email, name, opinion, phone
            }

            const response = await axios.post("http://localhost:5000/contact", postObj)
            if (response) {
                alert("Response is submited!");
                form.reset()
            }
        } catch (error) {
            console.error("Error is", error);
        }
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-1/3 mt-28  relative md:mx-4' >
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
            </div>
            <div className='w-2/3  mt-10 md:mt-28'>
                <form className="flex w-full h-full flex-col justify-center items-center gap-4 mb-2" onSubmit={handleContact}>
                    <h2 className='text-3xl'>Reach Us From Here</h2>
                    <div className='w-full md:w-2/3'>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" name="email" type="email" placeholder="name@gmail.com" required shadow />
                    </div>
                    <div className='w-full md:w-2/3'>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput id="name" name="name" type="text" placeholder='Mr. Reader' required shadow />
                    </div>
                    <div className='w-full md:w-2/3'>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Contact No." />
                        </div>
                        <TextInput id="phone" name='phone' type="phone" placeholder='+91 9984556644' required shadow />
                    </div>
                    <div className='w-full md:w-2/3'>
                        <div className="mb-2 block">
                            <Label htmlFor="opinion" value="Write your Opinion" />
                        </div>
                        <Textarea name="opinion" id="opinion" type="text" placeholder='Enter your thoughts' required rows={6} shadow />
                    </div>
                    <Button type="submit" >Submit</Button>
                </form>
            </div>
        </div>

    )
}

// flex w-full h-full flex-col justify-center items-center gap-4  mt-28