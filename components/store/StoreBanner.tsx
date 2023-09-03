import React from 'react'
import storeBanner from '../../public/store_banner.svg'
import Image from 'next/image'


export const StoreBanner = () => {
  return (
    <div className=' bg-primary w-full py-10'>
      <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row text-center px-10 lg:text-start space-y-6 lg:space-y-0 justify-between">
        <div className=" flex flex-col my-auto w-full space-y-6 lg:space-y-0">
          <h3 className=' text-3xl lg:text-4xl font-logo font-bold'>Welcome to the <span className='text-black'>Chemcider</span> Store </h3>
          <p className=' text-xl font-raleway'>
            Your Trusted Source for Laboratory Equipment, Medical Supplies, and Chemical Solutions in Nigeria and Afria
          </p>
        </div>
        <div className=" flex justify-end  max-w-max">
            <Image src={storeBanner} className=' object-end object-contained h-[300px] ' alt='Chemcider Store' />
        </div>
      </div>
    </div>
  )
}
