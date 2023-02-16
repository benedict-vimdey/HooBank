import React,{useState} from 'react'

import {close, logo, menu} from '../assets'

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex justify-between py-6 items-center '>
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <div className='sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((items, index) =>(
          <li
           key={items.id}
           className={`font-poppins list-none font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <div className=''>
              <p className='text-white hover:text-blue-300'>{items.title} </p>
            </div>

          </li>
        ))}
      </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          // onClick={() => setToggle(!toggle)}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <div className='flex flex-col justify-end items-center flex-1'>
            {navLinks.map((items, index) =>(
              <li
              key={items.id}
              className={`font-poppins list-none font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <div className=''>
                  <p className='text-white'>{items.title} </p>
                </div>

              </li>
            ))}
        </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar