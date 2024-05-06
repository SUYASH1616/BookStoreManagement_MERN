import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    

    const toggleMenu = () => {
;        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "sell Your Book", path: "/admin/dashboard" },
        { link: "Contact Us", path: "/contact" },
    ]

    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">

                    {/* logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2"><FaBlog className="inline-block" />Books</Link>


                    {/* nav for large device;  text-base for font size ;hidden to display:none on small sized screen(sm,md,lg)*/}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{link}</Link>)
                        }
                    </ul>

                    {/* btn for large devices ; w-5 for fabarS size */}
                    <div className="lg:flex space-x-12 hidden items center">
                        <button><FaBarsStaggered className="w-5 hover:text-blue-700" /></button>
                        {/* {
                            user ? user.email :""
                        } */}
                    </div>

                    {/* menu btn for mobile devices; md:hidden=>hides element if screen size is md or lg;focus:outline-none =>not mondatory */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />
                            }
                        </button>
                    </div>

                    {/* navItems for small devices;px-4=>padding at lf and rh;mt-16=>margin ay top; py-7=>padding at y axis */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer ">{link}</Link>)
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Navbar;