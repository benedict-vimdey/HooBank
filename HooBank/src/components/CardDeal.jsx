import React from 'react'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className='flex md:flex-row flex-col sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <p className='text-white font-poppins text-[48px] font-semibold leading-[76.8px] '>Find a better card deal <br/> in few easy steps.</p>
        <p className='text-dimWhite mt-5 tex-[18px] font-poppins leading-[30px] max-w-[470px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles='mt-10 rounded-[10px] ' text='Get Started' />
      </div>

      <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
        <img src={card} alt='card' className='w-[100%] h-[100%] z-[5] object-contain '/>
      </div>
    </div>
  )
}

export default CardDeal