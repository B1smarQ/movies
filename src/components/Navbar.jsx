import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import Contextpage from '../Contextpage';
import { motion } from "framer-motion";
import { HiMenuAlt1, HiX } from "react-icons/hi";


function Navbar() {

    const { header, user } = useContext(Contextpage);
    const [activemobile, setActivemobile] = useState(false);

    const Navdata = [
        {
            id: 1,
            headername: "Genres",
            Name: "Жанры",
            link : "/"
        },
        {
            id: 2,
            headername: "Trending Movies",
            Name: "Тренды",
            link:"/trending"
        },
        {
            id: 3,
            headername: "Upcoming Movies",
            Name: "Скоро в кино",
            link:"/upcoming"
        },
        {
            id: 4,
            headername: "Favorite Movies",
            Name: "Избранные",
            link:"/favorite"
        }
    ]

    return (
        <>
            {/* mobilebutton */}
            <button className="z-40 text-3xl text-black fixed right-0 bottom-0 m-6 p-4 duration-150 rounded-full active:scale-90 bg-white block md:hidden" onClick={() => setActivemobile(!activemobile)}>
                {activemobile ? <HiX /> : <HiMenuAlt1 />}
            </button>

            <nav className={`${activemobile ? 'block' : 'hidden'} fixed bg-black/90 md:bg-black h-full w-full md:w-[15rem] z-30 md:block`}>
                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.4 }}
                >
                </motion.div>


                <ul className="text-white font-semibold text-[16px] text-center px-5">
                    {Navdata.map((data) => (
                            <Link key={data.id} to={data.link}><li className={`${header == data.headername ? 'bg-blue-500/20 border-blue-600 text-white' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(!activemobile)}>{data.Name}</li></Link>
                    ))}

                </ul>

                {/* Loginsection */}

                
            </nav>
        </>
    )
}

export default Navbar
