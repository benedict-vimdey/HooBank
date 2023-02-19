import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className='flex items-center justify-center w-[140px] h-[140px] rounded-full bg-blue-400 p-[2px] cursor-pointer '>
      <div className='flex items-center justify-center flex-col bg-primary h-[100%] w-[100%] rounded-full'>
        <div className='flex justify-center items-start'>
          <p className='font-poppins font-medium text-[18px] leading-[23px] '>
            <span className='text-blue-400'>Get </span>
          </p>
            <img src={arrowUp} alt='arrow up' className='w-[23px] h-[23px] object-contain ml-2 ' />
        </div>

        <div className='flex justify-center items-start'>
          <p className='font-poppins font-medium text-[18px] leading-[23px] '>
            <span className='text-blue-400'>Started</span>
          </p>            
        </div>

      </div>
    </div>
  )
}

export default GetStarted