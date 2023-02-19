import React from 'react'

const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

const Stats = () => {
  return (
    <div className='flex justify-center items-center flex-wrap sm:mb-20 mb-6'>
      {stats.map((stat) => (
        <div key={stat.id} className='text-white flex items-center p-16 m-3 flex-1 '>
          <p className='font-poppins font-semibold text-[40px] xs:font-[40px] xs:leading-[53px] leading-[43px] '>{stat.value}</p>
          <p className='font-poppins font-normal text-[20px] text-blue-400 ml-3 '>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats