// called in nav

import React from "react";
import useImg from "../assets/profile.jpg";
const About = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-2/5 h-screen relative md:mx-4 flex flex-col md:flex-row-reverse items-center'>
                    <div className="w-2/4 h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <img src={useImg} alt="..." className="md:h-96 w-3/4 rounded-lg" />
                    </div>
                </div>

                <div className='w-3/5 h-screen sm:mt-10'>
                    <div className="flex w-full h-full flex-col justify-center gap-4 mb-2" >
                        <h2 className='text-3xl font-bold'>How to use App</h2>
                        <div className='w-full md:w-2/3 mt-4'>
                            <div className="mb-2 block flex flex-row">
                                <p className="font-semibold text-xl">1.</p>
                                <h2 className="font-semibold text-xl">Sign In</h2>
                            </div>
                            <div className="px-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ad, enim repudiandae voluptatem quod animi. Consequatur excepturi id quae delectus.Debitis nam ad, enim repudiandae voluptatem quod animi.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/3 mt-4'>
                            <div className="mb-2 block flex flex-row">
                                <p className="font-semibold text-xl">2.</p>
                                <h2 className="font-semibold text-xl">Buy a Book</h2>
                            </div>
                            <div className="px-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ad, enim repudiandae voluptatem quod animi. Consequatur excepturi id quae delectus.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/3 mt-4'>
                            <div className="mb-2 block flex flex-row">
                                <p className="font-semibold text-xl">3.</p>
                                <h2 className="font-semibold text-xl">Rate us</h2>
                            </div>
                            <div className="px-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ad, enim repudiandae voluptatem quod animi. Consequatur excepturi id quae delectus.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/3'>
                            <div className="mb-2 block">
                                {/* <Label htmlFor="opinion" value="Write your Opinion" /> */}
                            </div>
                            {/* <Textarea name="opinion" id="opinion" type="text" placeholder='Enter your thoughts' required rows={6} shadow /> */}
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center md:space-4'>
                {/* w-full md:w-2/5 h-screen relative md:mx-4 flex flex-col md:flex-row-reverse items-center */}
                <div className='w-3/5 h-screen sm:mt-10'>
                    {/* <div className="flex flex-di"></div> */}

                    <div className="flex w-full h-full flex-col justify-center items-end gap-4 mb-2" >
                        <div className="w-full md:w-2/3">
                            <h2 className='text-3xl font-bold flex '>How to use App</h2>
                        </div>
                        <div className='w-full md:w-2/3 mt-4'>
                            <div className="mb-2 block flex flex-row">
                                <p className="font-semibold text-xl">1.</p>
                                <h2 className="font-semibold text-xl">Sign In</h2>
                            </div>
                            <div className="px-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ad, enim repudiandae voluptatem quod animi. Consequatur excepturi id quae delectus.Debitis nam ad, enim repudiandae voluptatem quod animi.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/3 mt-4'>
                            <div className="mb-2 block flex flex-row">
                                <p className="font-semibold text-xl">2.</p>
                                <h2 className="font-semibold text-xl">Buy a Book</h2>
                            </div>
                            <div className="px-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ad, enim repudiandae voluptatem quod animi. Consequatur excepturi id quae delectus.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/3 mt-4'>
                            <div className="mb-2 block flex flex-row">
                                <p className="font-semibold text-xl">3.</p>
                                <h2 className="font-semibold text-xl">Rate us</h2>
                            </div>
                            <div className="px-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ad, enim repudiandae voluptatem quod animi. Consequatur excepturi id quae delectus.</p>
                            </div>
                        </div>
                        <div className='w-full md:w-2/3'>
                            <div className="mb-2 block">
                                {/* <Label htmlFor="opinion" value="Write your Opinion" /> */}
                            </div>
                            {/* <Textarea name="opinion" id="opinion" type="text" placeholder='Enter your thoughts' required rows={6} shadow /> */}
                        </div>

                    </div>
                </div>

                <div className='w-full md:w-2/5 h-screen relative md:mx-4 flex flex-col md:flex-row items-center'>
                    <div className="w-2/4 h-56 sm:h-64 xl:h-80 2xl:h-96 flex flex-row-reverse">
                        <img src={useImg} alt="..." className="md:h-96 w-3/4 rounded-lg" />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default About;