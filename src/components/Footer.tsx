import React from 'react'
import { FaRegHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col justify-between text-center'>
      <div className='h-[1px] bg-white w-full'/>
      <div className='mt-10 flex gap-2 items-center justify-center'>
        Build By <FaRegHeart className='text-blue-400'/> Lakshay Garg
      </div>
    </div>
  )
}

export default Footer
