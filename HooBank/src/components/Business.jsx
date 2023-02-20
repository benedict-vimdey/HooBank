import React from 'react'
import { star, shield, send } from '../assets'
import FeatureCard from './FeatureCard'
import Button from './Button'

const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
]


const Business = () => {
  return (
    <div className='w-full grid grid-cols-12 text-white py-16'>
      <div className='col-span-6'>
        <h2 className='font-poppins xs:text-[48px] text-[40px] font-semibold  max-w-full leading-[66x] xs:leading-[76.8px] '>You do the business, <br/> we’ll handle the money.</h2>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 '>With the right credit card, you can improve your financial life by <br/> building credit, earning rewards and saving money. But with <br/> hundreds of credit cards on the market.</p>
        
        <Button styles='mt-10' text='Get Started' />
      </div>
      <div className='col-span-6'> 
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature}/>
        ))}
      </div>
    </div>
  )
}

export default Business