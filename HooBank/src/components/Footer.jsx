import React from 'react'
import { logo, instagram, facebook, twitter, linkedin } from '../assets'


const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];


const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];


const Footer = () => (
  <section className='flex justify-center items-center flex-col sm:py-16 py-6'>
    <div className='w-full flex justify-center items-start flex-col mb-8 md:flex-row '>
      <div className='flex-1 flex flex-col justify-start mr-10 '>
        <img 
          src={logo} 
          alt='logo' 
          className='w-[266px] h-[72px] object-contain'
        />
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[310px] '>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className='w-full flex-[1.5] flex flex-row justify-between flex-wrap mt-10 md:mt-0  '>
      {footerLinks.map((footerLink) =>(
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <p className='font-poppins font-medium text-[18px] leading-[27px] text-white '> 
              {footerLink.title} 
            </p>

            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} 
                  className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'} `} 
                >
                  {link.name}
                </li>
              ))}
              
            </ul>
          </div>
        ))}

      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] '>
      <p className='font-poppins font-normal text-center text-white text-[18px] leading-[27px]'>
        2023 HooBank. All Rights Reserved.
      </p>

      <div className='flex mt-6 md:mt-0'>
        {socialMedia.map((social) => (
          <div key={social.id}>
            <img 
              src={social.icon} 
              alt={social.id} 
              className={`w-[21px] h-[21px] object-contain mr-6`} />
          </div>
        ))}
      </div>
    </div>
  </section>
)


export default Footer