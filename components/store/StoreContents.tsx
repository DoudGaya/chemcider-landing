import React from 'react'
import { StoreImage } from '../StoreImages'

export const StoreContents = () => {
  return (
    <div className=" w-full py-20 bg-slate-200 dark:bg-slate-900">
          <div className=" flex flex-col  mx-auto max-w-5xl">
              <div className=" flex w-full border-b dark:border-slate-700 my-6 py-4">
                   <h3 className=' text-2xl font-raleway'>The Chemcider Store</h3>
           </div>
              <div className="  grid grid-cols-2 gap-x-6  my-auto">
              <div className=" h-full my-auto flex flex-col justify-center">
                <p className=' font-poppin text-justify'>
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
  )
}
