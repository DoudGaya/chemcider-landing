import React from 'react'
import { StoreImage } from '../StoreImages'
import { storeContents } from '@/lib/data'
import { WhatWeOffer } from './WhatWeOffer'



const storeItems = storeContents.map((single) => {
    return <WhatWeOffer key={single.id} single={single} />
})



export const StoreContents = () => {
  return (
      <div className=" flex flex-col ">
            <div className=" w-full px-8 py-20 bg-slate-200 dark:bg-slate-900">
          <div className=" flex flex-col  mx-auto max-w-5xl space-y-8">
              <div className=" flex w-full justify-center border-b dark:border-slate-700 ">
                   <h3 className=' text-2xl font-raleway'>The Chemcider Store</h3>
           </div>
              <div className="  grid grid-cols-1 lg:grid-cols-2 gap-x-6">
              <div className=" h-full my-auto flex flex-col justify-center">
                <p className=' font-poppin text-lg lg:text-base  text-justify'>
                  At Chemcider Store, we are your one-stop destination for high quality laboratory equipment,
                  essential medical supplies, and top-notch chemicals in Nigeria. With a commitment to excellence
                  and a passion for serving healthcare professionals, researchers, and institutions, we provide a
                  comprehensive range of products to meet your diverse needs.
              </p>
              </div>
              <div className="">
                  <StoreImage />
              </div>
          </div>
    </div>
          </div>
          
        <div className=" w-full py-20">
            <div className=" mx-auto max-w-5xl flex flex-col w-full">
                <div className=" flex w-full justify-center ">
                    <h3 className=' font-raleway text-center text-2xl '>Explore Our Extensive Range of Products</h3>
                </div>
                <div className=" grid grid-cols-3 gap-x-6 my-6">
                        {storeItems}
                </div>
            </div>
          </div>
          <div className=" bg-slate-200 dark:bg-slate-800">
              More
        </div>
  </div>
  )
}
