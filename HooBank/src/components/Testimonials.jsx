import React from 'react'
import FeedbackCard from './FeedbackCard'
import { people01, people02, people03 } from '../assets';

const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

const Testimonials = () => {
  return (
    <section className='w-full flex justify-center items-center sm:py-16 py-6 flex-col relative'>
      <div className='w-full flex justify-between items-center  mb-6 z-[1] md:flex-row sm:mb-16 '>
        <p className='text-white font-poppins text-[48px] font-semibold leading-[81.6px] '>
          What people are <br/> saying about us
        </p>
        <div className=' md:mt-0 mt-6 mr-36 '>
          <p className='text-dimWhite font-poppins max-w-[450px] text-[18px] text-left leading-[32.4px] '>
            Everything you need to accept card payments <br/> and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center w-full relative z-[1]'>
        {feedback.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials