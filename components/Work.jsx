import { assets, projects, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className=' w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>My Portfolio</h4>
      <h2 className='text-center text-5xl'>My Latest Work</h2> 
      <p className='max-w-2xl mx-auto mt-5 mb-12 text-center'>Welcome to my web development portfolio! Explore a collection of projects showcasing
      my expertise in front-end development.</p>
      <div className='grid grid-cols-auto my-10 gap-5  md:grid-cols-3'>
        {workData.map((project,index)=>(
            <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage:`url(${project.bgImage})`}}>
               
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
               <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon } className='w-5' alt="send icon" />
                </div>
            </div>
                
            </div>
        ))}        
      </div>
      {/* projects Discription */}
        <div>
          {/* <h1 className='text-4xl'>Projects</h1> */}
          {projects.map((item,index)=>(
              <div key={index} className='my-2'>
                    <h1 className='text-2xl'>{item.title}</h1>
                    <p>{item.description}</p>
                    <h3>{item.desc1}</h3>
                    <h3>{item.desc2}</h3>
                    <h3>{item.desc3}</h3>
                    <h2 className='text-blue-500'>{item.info}</h2>
                    <Link href={item.websiteLink} className='text-xl my-2 border-b border-blue-500' target='_blank'>LINK</Link>
              </div>
          ))}
        </div>
        <a className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto my-10 hover:bg-blue-300 duration-500' href="#">Show More
            <Image src={assets.right_arrow_bold} className='w-4' alt='Right arrow'/>

        </a>

    </div>
  )
}

export default Work