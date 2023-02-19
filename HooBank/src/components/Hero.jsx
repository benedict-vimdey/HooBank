import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () =>  (
    <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
        <div className='flex items-center  bg-gradient-to-r from-[#272727] to-[#11101D] rounded-[10px] px-4 py-[6px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px] ' />
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
            <span className='text-white'>20%</span> DISCOUNT FOR {" "}
            <span className='text-white'>1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className='flex justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold text-white text-[52px] leading-[75px] '>
            The Next <br className='sm:block hidden'/> {" "}
            <span className='text-blue-400'>Generation</span> 
          </h1>

          <div className='ss:flex-1 md:mr-4 mr-0 '>
            <GetStarted/>
          </div>
        </div>

        <h1 className='font-poppins font-semibold text-white text-[52px] leading-[75px] ss:leading-[100px] '>
          Payment Method
        </h1>

        <h1 className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 '>
          Our team of experts uses a methodology to identify <br/> the credit cards most likely to fit your needs. <br/>
          We examine annual percentage rates, annual fees.
        </h1>

      </div>

      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
        <img src={robot} alt='robot' className='w-[100%] h-[100%] relative z-[5]' />
      </div>

    </section>
  )


export default Hero