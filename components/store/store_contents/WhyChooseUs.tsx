import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/lab_store.jpg'
import image2 from '../../../public/lab_white.jpg'


const whyChooseUs = [
    {
        id: 1,
        title: 'Quality Assurance',
        message: 'We source products from trusted manufacturers, ensuring that you receive only the best quality items.'
    },
     {
        id: 2,
        title: 'Competitive Pricing',
        message: 'Our commitment to affordability means you get the most value for your investment.'
    },
    {
        id: 3,
        title: 'Prompt Delivery',
        message: 'We understand the importance of timely supplies. Rest assured, we deliver your orders promptly and securely'
    },
    {
        id: 4,
        title: 'Expert Support',
        message: 'Our knowledgeable team is ready to assist you with product selection, technical queries, and more'
    },
]

export const WhyChooseUs = () => {
  return (
      <div className=" bg-slate-200 dark:bg-slate-800">
        <div className=" mx-auto max-w-5xl flex flex-col py-10 space-y-6">
          <div className=" flex justify-center w-full my-6">
              <h3 className=' text-2xl font-raleway'>Why Choose Chemcider Store</h3>
          </div>
          <div className=" grid  gap-x-8 ">
                  <div className="">
                      <ul className=' grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-0 gap-10'>
                          {
                              whyChooseUs.map((items) => {
                                  return (
                                    <li key={items.id} className=' border-b py-6 border-primary flex flex-col space-y-2'>
                                        <h3 className=' text-xl font-poppin text-primary'>{ items.title }</h3>
                                        <p className=' font-poppin'> { items.message }</p>
                                    </li>
                                  )
                              })
                          }
                      </ul>
                  </div>
          </div>
              </div>
        </div>
  )
}
