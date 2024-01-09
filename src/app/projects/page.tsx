import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
import laptop from "../../../public/Laptop.jpg";
import Image from 'next/image';

const project = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <div className='w-11/12 py-2 mx-auto flex flex-col gap-10'>
        <NavBar/>
        <div className='border-4 border-solid border-gray-800 p-3 mt-5 lg:mt-0 inline-block'>
            <div className='border-4 border-solid border-white p-3'>
              <Image src={laptop} alt='laptop' className='h-[300px] lg:h-[600px] w-full object-cover' />
            </div>
          </div>
        <Footer/>
      </div>
    </div>
  )
}

export default project
