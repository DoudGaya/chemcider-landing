import React from 'react'
import labImage from '../../../public/lab_store.jpg'

export const StoreProducts = () => {
  return (
    <div style={{backgroundImage: `url(${labImage.src})`,}} className='bg-slate-800 px-10 dark:text-white text-white bg-blend-overlay bg-cover bg-no-repeat w-full py-20 lg:py-[200px]'>
          <div className=" grid grid-cols-2">
              <div className=" w-full flex flex-col max-w-5xl items-center text-center space-y-6  mx-auto">
              <h3 className=' text-2xl '>Serving Hospitals, Research Institutes, and More</h3>
              <p className=' font-raleway font-semibold text-lg'>
                  Our products cater to a wide range of customers,
                  including hospitals, clinics, research institutions,
                  and industrial facilities. Whether you're in the medical
                  field or involved in scientific research, <span className=' text-primary font-semibold'>Chemcider Inc </span>
                  is here to support your success.
              </p>
              </div>      
              <form>
                  <div className=""></div>
              </form>
              
          </div>
    </div>
  )
}
