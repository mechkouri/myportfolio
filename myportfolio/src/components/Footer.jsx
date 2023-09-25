import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <section className='container pb-[20px]'>
         <div className="w-full flex justify-center lg:gap-[30px] items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#ebc0e044]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 MECHKOURI. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 space-x-6">
        <SocialMedia />
      </div>
    </div>
    </section>
  )
}

export default Footer