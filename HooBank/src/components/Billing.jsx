import React from 'react'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
        <img src={bill} alt='billing' className='h-[100%] w-[100%] z-[5] relative object-contain ' />
      </div>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <p className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Easily control your <br/> billing & invoicing.</p>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 '>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className='flex flex-wrap sm:mt10 mt-6'>
          <img src={apple} alt='apple_store' className='w-128px h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google-play' className='w-128px h-[42px] object-contain mr-5 cursor-pointer' />
        </div>
      </div>

    </div>
  )
}

export default Billing