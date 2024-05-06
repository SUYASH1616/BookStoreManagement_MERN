import React from "react";
import Banner from "../components/Banner"
import BestSellerBooks from "./FavouriteBooks";
import FavBooks from "./FavBooks";
import { PromoBanner } from "./PromoBanner";
import OtherBooks from "./Otherbooks";
import Review from "./Review";
const Home=()=>{
    return <>
        <Banner/> 
        <BestSellerBooks/>
        <FavBooks/>
        <PromoBanner/>
        <OtherBooks/>
        <Review/>
        </>
}

export default Home;