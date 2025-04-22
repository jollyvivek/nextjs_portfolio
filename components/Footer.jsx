import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-10'>
       <div className='text-center mb-2'>
            <a href="#top">
            <h1 className='text-[2rem] text-blue-500'><span className='text-red-900'>V</span>ivek</h1>
            </a>
            <div className=' flex items-center justify-center gap-3 my-2'>
                <Image src={assets.mail_icon} className='w-6' alt='mail-icon'/>
                <h5>jollyvivek19@gmail.com</h5>

            </div>
        </div> 
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-10 py-6'>
            <p>© 2025 Vivek jolly. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <Link href="https://www.linkedin.com/in/vivek-jolly-157a00231/" target='_blank'>Linkedin</Link>
                {/* <li className='cursor-pointer'><a href="https://www.linkedin.com/in/vivek-jolly-157a00231/" target='_blank'></a>Linkedin</li> */}

                <Link href="https://github.com/jollyvivek" target='_blank' className='cursor-pointer'>GitHub</Link>
                
            </ul>
        </div>
        
        
        
        
        
    </div>
  )
}

export default Footer