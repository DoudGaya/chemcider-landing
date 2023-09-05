import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tech from '../../public/about/technology.jpg'

export const Company = () => {
  return (

<div className=" w-full ">
    <div className=" grid max-w-6xl mx-auto grid-cols-1 px-10 lg:px-0 lg:grid-cols-2 gap-6 w-full py-20">
      <div className=" flex flex-col space-y-4 my-auto h-full justify-center">
    <div className=" space-y-2">
        <p className=' lg:text-3xl text-2xl font-semibold font-raleway '>About Chemcider</p>
            <div className=" text-justify font-raleway">
                Welcome to Chemcider Inc., your gateway to boundless knowledge in the realms of science,
                technology, and engineering. At Chemcider, we believe that learning is the catalyst
                for progress, and our mission is to foster a community where curiosity knows no bounds.
            </div>
                  </div>
                  
                   <div className=" space-y-2">
        <p className=' lg:text-3xl text-2xl font-semibold font-raleway '>Our Vision</p>
            <div className=" text-justify font-raleway">
                Our vision is a world where anyone with a thirst for knowledge can quench
                        it freely and effortlessly. We aspire to be the global hub where individuals from every corner of the Earth can
                        access, share, and collaborate on cutting-edge insights in science, technology, and engineering.
            </div>
       </div>
       <div className=" flex w-full ">
       
       </div>
      </div>
      <div className="">
        <Image src={tech} priority={true} className=' lg:h-full h-[200px] object-cover object-center' alt='Interlude Break' />
      </div>
      </div>
     </div>
  )
}