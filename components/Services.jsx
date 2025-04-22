import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20' >
      <h4 className='text-center mb-2 text-lg'>What I offers</h4>
      <h2 className='text-center text-5xl'>My Services</h2> 
      <p className='max-w-2xl mx-auto mt-5 mb-12 text-center'>I am a frontend developer from Ambala, Haryana with 1.5 years of experience in React Js and 7+ month in Mern stack 
      companies like RW Infotech, Bfox Pvt Lmt.</p>
        <div className='grid grid-cols-auto   gap-6 my-10 md:grid-cols-3'>
            {serviceData.map(({icon,title,description,link},index)=>(
                <div key={index} className=' border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-300'>
                        <Image src={icon} alt='' className='w-12'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More <Image src={assets.right_arrow} className='w-4' alt=''/></a>
                </div>
            ))}
        </div>
        
        
        
    </div>
  )
}

export default Services