import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
       <h4 className='text-center mb-2 text-lg'>Introduction</h4>
       <h2 className='text-center text-5xl'>About Me</h2> 
       <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} className='w-full rounded-3xl' alt='user'/>
        </div>
        <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>Skilled REACT JS Developer with 1.5 years of experience in front-end and back-end development, specializing in React.js, 
                    Next.js, Node.js, Express and MongoDB. Proficient in converting designs from Figma into responsive, accessible web
                     applications .Passionate about building efficient, scalable, and user-friendly solutions. Seeking opportunities to 
                     leverage my expertise and contribute to the success of an organization while continuing to grow and learn.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description},index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-100 hover:-translate-x-1 duration-500 hover:shadow-black' 
                        key={index}>
                            <Image src={icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                {/* tools */}
                <h4 className='my-6 text-gray-700 text-xl'>Tools I use</h4>
                <ul className='flex items-center justify-between flex-wrap gap-3 '>
                    {toolsData.map((tool,index)=>(
                        <li key={index} className='flex flex-wrap items-center justify-center w-8 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-blue-100 hover:-translate-x-1 duration-500 '>
                            <Image src={tool} className='w-5 sm:w-7' alt='tool' />
                        </li>
                    ))}
                </ul>
        </div>
       </div>
        
    </div>
  )
}

export default About