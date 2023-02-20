import React from 'react'

const FeatureCard = ({icon, title, content}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card hover:bg-dimBlue cursor-pointer`}>
        <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center '> 
            <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <p className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                {title}
            </p>

            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
                {content}
            </p>
        </div>
    </div>
  )
}

export default FeatureCard