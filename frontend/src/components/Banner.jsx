// Buy and Sell Your Booksfor best Prices
// called in home

import react from "react";
import BannerCard from "../home/BannerCard";

const Banner=()=>{
    return (
        // teal is color
        <div className="px-x lg:px-24 bg-teal-100 flex items-center">
            {/* flex direction is column wise when it is samll screen sizes and for rest it is rowwise */}
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* left side */}
                {/* add spcaing in chidren */}
                <div className="md:w-1/2 space-y-8 h-full">
                    {/* text-5xl==font-size */}
                    <h2 className="text-5xl font-bold lading-sung text-black">Buy and Sell Your Books
                    <span className="text-blue-700">for best Prices</span></h2>                 
                 <p className="md:w-4/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum delectus laborum laudantium sint consectetur provident, enim tenetur nam totam a incidunt, dolore deserunt doloribus. Nam laborum quae ipsum omnis qui?</p>
                    <div >
                       <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-2 rounded-s-sm outline-none" ></input>
                       <button className="bg-blue-700 px-6 py-3 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
                    </div>
                </div>

                {/* Right Side */}
                <div><BannerCard/></div>
            </div>
        </div>
    )
}

export default Banner;