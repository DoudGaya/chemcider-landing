import React from 'react'
import labImage from '../../../public/lab_store.jpg'

export const StoreProducts = () => {
  return (
    <div style={{backgroundImage: `url(${labImage.src})`,}} className='bg-slate-800/60 lg:px-10 dark:text-white text-white bg-bottom bg-blend-overlay bg-cover bg-no-repeat w-full '>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-3 max-w-5xl w-full mx-auto ">
              <div className=" w-full py-20 lg:py-[100px] bg-slate-200 dark:bg-black/50 backdrop-blur px-8 flex flex-col space-y-6">
              <h3 className=' text-xl '>Serving Hospitals, Research Institutes, and More</h3>
              <p className=' font-raleway  text-justify text-lg'>
                  Our products cater to a wide range of customers,
                  including hospitals, clinics, research institutions,
                  and industrial facilities. Whether you're in the medical
                  field or involved in scientific research, <span className=' font-semibold'>Chemcider Inc </span> is here to support your success.
              </p>
              </div>      
              <form className=' py-10 flex flex-col items-center'>
                  <h2 className=' text-2xl'>Contact Us Today</h2>
                  <div className=" flex space-y-4 flex-col w-full px-10">
                      <div className=" grid gap-x-4  w-full grid-cols-1 lg:grid-cols-2">
                        <label htmlFor="" className=' flex flex-col space-y-2'>
                            <p>Email Address</p>
                          <input type="text" className=' w-full py-2 bg-slate-700/40 px-4 outline-none rounded-lg border ' />
                          </label>
                          <label htmlFor="" className=' flex flex-col space-y-2'>
                            <p>Phone Number</p>
                          <input type="text" className=' w-full py-2 bg-slate-700/40 px-4 outline-none rounded-lg border ' />
                      </label>
                      </div>
                      <label htmlFor="" className=' flex flex-col space-y-4'>
                          <p>Message</p>
                          <textarea name="" id="" className=' py-2 px-3 h-[100px] w-full bg-slate-700/40 border rounded-lg'>
                              
                          </textarea>
                      </label>

                      <button type='submit' className=' w-full bg-primary py-2 rounded-lg '>
                          Send Message
                      </button>
                      
                  </div>
              </form>
              
          </div>
    </div>
  )
}
