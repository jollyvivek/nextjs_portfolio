import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
// import Cv from '../VivekCVMERN.pdf'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 py-4'>
        <div className='mt-[5rem]'>
           {/* <Image src={assets.profile_img} className='rounded-full w-28' alt=''/>   */}
           <Image src={assets.user_image} className='rounded-full w-40' alt='userPic'/>           
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I’m Vivek Jolly 
            <Image src={assets.hand_icon} className='w-6' alt=''/> 
        </h3>
        <h1 className='text-3xl sm:text-5xl lg:text-[66px]'>Frontend ReactJs Developer and MERN Stack Developer.</h1>
        <p className='max-w-2xl mx-auto'>I am a frontend developer from Ambala, Haryana with 2.3 years of experience in React Js and 1 + year in Mern stack 
        companies like RW Infotech, Bfox Pvt Lmt. and Eways pvt Lmt.</p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
          <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} className=' w-4' alt=''/>  </a>
          {/* <a href="/VivekCVMERN.pdf" target='_blank' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> */}
          <a href="/VivekKumarCV2026.pdf" target='_blank' download className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
          My CV<Image src={assets.download_icon} className=' w-4' alt=''/>  </a>
        </div>




    </div>
  )
}

export default Header