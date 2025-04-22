import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll,setIsScroll] = useState(false)
    const sideMenuRef=useRef()
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])


  return (
    <>
    {/* <div className='fixed top-0 right-0 w-11/12 z-10 tranlate-y-[-80%]'>
        <Image src={assets.header_bg_color} className='w-full' alt=''/>
    </div> */}
    <nav className={`w-full fixed px-5 lg:px-8 xl-px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" :""}`}>
        <a href="#top">
            {/* <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/> */}
            <h1 className='text-[3rem] text-blue-500'><span className='text-red-900'>V</span>ivek</h1>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" :"bg-white shadow-sm bg-opacity-50"} `}>
            <li><a className='font-ove' href="#top">Home</a></li>
            <li><a className='font-ove' href="#about">About Me</a></li>
            <li><a className='font-ove' href="#services">Services</a></li>
            <li><a className='font-ove' href="#work">My Work</a></li>
            <li><a className='font-ove' href="#contact">Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'> 
            {/* <button><Image src={assets.moon_icon} className='w-6' alt=''/></button> */}
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ove'>Contact
                <Image src={assets.arrow_icon} className='w-3' alt='' /> 
            </a>
            <button onClick={openMenu}  className='block md:hidden ml-3'><Image src={assets.menu_black} className='w-6' alt=''/></button>
        </div>
        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div onClick={closeMenu} className='absolute top-6 right-6'><Image src={assets.close_black} className='w-6 cursor-pointer' alt=''/></div>
            <li><a onClick={closeMenu} href="#top">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About Me</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#work">My Work</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact Me</a></li> 
        </ul>
    </nav>  
    
    </>
  )
}

export default Navbar