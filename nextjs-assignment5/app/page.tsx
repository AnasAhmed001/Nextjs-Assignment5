import Image from 'next/image'
import React from 'react'
import girl_image from '../public/1f537eb50b863f64bbaa65861287126e.jpeg'

const page = () => {
  return (
    <>
    <div className='bg-[#A29875] h-[134px]'>
    <h1 className='w-[439px] h-[94px] top-5 left-9 font-normal font-[Rye] text-white text-[75px]'>MANZZARI</h1>
    </div>
    <div className='flex ml-24 mr-24 mt-6'>
      <div>
        <h1 className='font-[Libre-Bodoni] w-[496px] h-[189px] top-[316px] left-[176px] font-bold text-[40px] tracking-[2.5%] leading-[68.5px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      
        <p className='w-[902px] h-[147px] top-[533px] left-[171px] font-[Libre-Bonodi] font-medium text-[30px] leading-[49.35px] tracking-[2.5%] mt-4'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desireable collection.</p>
        <button  className='w-[288px] text-white h-[58px] font-[Libre-Bonodi] font-medium text-[30px] bg-[#A29875] top-[730px] left-[176px] rounded-[10px] p-[10px] g-[10px]'>Explore Now</button>
      </div>
      <div>
      <Image src={girl_image} width={462} height={647} alt='image' className='rounded-tl-[150px] rounded-br-[150px] border-[#FFFFFF] top-[198px] left-[1164px] '></Image>
      </div>
    </div>
    </>
  )
}

export default page