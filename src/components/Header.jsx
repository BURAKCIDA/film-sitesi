import React from 'react'
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ThemeComp from './ThemeComp';
const Header = () => {
    return (
        <div className='flex items-center gap-7 h-20 p-5 max-w-screen-xl mx-auto '>
            <div className='bg-rose-700 rounded-lg  p-3 sm:text-2xl font-bold text-sky-500'>
                MoviAPP
            </div>
            <div className='flex flex-1 items-center p-3 gap-2 border rounded-lg'>
                <input placeholder='Arama Yapınız!' className='outline-none flex-1 bg-transparent ' type="text" />
                <FaSearch />
            </div>
            <ThemeComp />
            <div className='flex font-bold gap-5 '>
                <Link href="/" className='hidden sm:inline hover:text-orange-400' > HOME </Link>
                <Link href="/" className='sm:hidden hover:text-orange-400' > <FaHome /></Link>
                <Link href="/about" className='hidden sm:inline hover:text-orange-400' > ABOUT </Link>
                <Link href="/about" className='sm:hidden hover:text-orange-400' > <BsFillInfoCircleFill /></Link>
            </div>

        </div >
    )
}

export default Header