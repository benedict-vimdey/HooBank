import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:me-10 sm:mr-5 mr-0 my-5 hover:bg-dimBlue '>
      <img src={quotes} alt='quotes' className='w-[42px] h-[27px] object-contain ' />
      <p className='font-poppins text-white font-normal text-[18px] leading-[32px] my-10'>
        {content}
      </p>

      <div className='flex'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full ' />
        <div className='flex flex-col ml-4'>
          <p className='font-poppins font-normal text-[18px] leading-[32px] text-white'>
            {name}
          </p>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard