import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <div className='flex justify-center items-center sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 rounded-[20px] sm:flex-row flex-col bg-gradient-to-r from-[#11101D] to-[#272727]'>
      <div className='flex-1 flex flex-col'>
        <p className='font-poppins text-white text-[48px] leading-[67.2px] font-semibold '>
          Let’s try our service now!
        </p>
        <p className='font-poppins text-[18px] leading-[30px] text-dimWhite mt-5 '>
          Everything you need to accept card payments <br/> and grow your business anywhere on the planet.
        </p>
      </div>

      <div className='flex justify-center items-center mt-10 ml-0 sm:mt-0 sm:ml-10 '>
        <Button styles='rounded-[20px]' text='Get Started'/>
      </div>
    </div>
  )
}

export default CTA