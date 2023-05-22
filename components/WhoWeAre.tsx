import engineer from '../public/engineer.jpg'
import doctor from '../public/doctor.jpg'
import scientist from '../public/scientist.jpg'
import info from '../public/info.jpg'
import connect from '../public/connect.jpg'
import Image from 'next/image'


export const WhatWeDo = () => {
    return (
        <>
        <div className=" flex flex-col items-center ">
            <div className="grid grid-cols h-full">
            
            <div className=" dark:bg-slate-900 grid lg:grid-cols-2 grid-cols-1 px-10 justify-center leading-7 xl:px-0 flex-col ">
               <div className=" px-6 flex flex-col justify-center py-6">
               <h2 className='text-md lg:text-lg py-2 text-start text-xl  font-logo'>Our Mission</h2>
                <p className=' xl:text-base text-justify '>
                    Our mission is to provide scientists and engineers with access to quality products and connections that will help 
                    them advance their research and projects. 
                    Whether you're looking for cutting-edge technology, trusted suppliers, or like-minded peers, we've got you covered.
                </p>
               </div>
               <div className=" h-[400px] overflow-hidden">
               <Image src={connect} className=' rounded-bl-full overflow-hidden w-full h-full object-center object-cover' alt='Chemcider Server infomation' />
               </div>
            </div>

            <div className=" dark:bg-slate-900 grid grid-cols-1 lg:grid-cols-2 px-10 justify-center leading-7 xl:px-0 flex-col ">
               <div className=" h-[400px] overflow-hidden">
               <Image src={info} className=' rounded-tr-full overflow-hidden w-full h-full object-center object-cover' alt='Chemcider Server infomation' />
               </div>
               <div className="px-6 flex flex-col justify-center py-6">
                <h2 className=' text-xl lg:text-lg py-2 text-start font-logo '>Cutting-Edge Information</h2>
                    <p className=' text-md text-justify'>
                        Stay up-to-date with the latest scientific and engineering news and trends with our blog and newsletter.
                        Our experts will provide insights, analysis, and advice on the topics that matter most to you.
                    </p>
               </div>
            </div>




            </div>
        </div>
        </>
    )
}