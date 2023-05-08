import engineer from '../public/engineer.jpg'
import doctor from '../public/doctor.jpg'
import scientist from '../public/scientist.jpg'
import Image from 'next/image'


export const WhatWeDo = () => {
    return (
        <>
        <div className=" xl:h-[500px] flex flex-col items-center ">
            <div className=" grid xl:grid-cols-3 grid-cols-1 h-full">
            
            
            <div className=" dark:bg-slate-900 px-10 flex justify-center leading-7 py-16 xl:px-4 flex-col ">
                <h2 className='text-md lg:text-lg py-2 text-start text-xl  font-logo'>Our Mission</h2>
                <p className=' xl:text-base text-justify '>
                    Our mission is to provide scientists and engineers with access to quality products and connections that will help 
                    them advance their research and projects. 
                    Whether you're looking for cutting-edge technology, trusted suppliers, or like-minded peers, we've got you covered.
                </p>
            </div>

                <div className=" dark:bg-black flex leading-7  py-16 bg-white justify-center px-10 xl:px-4 flex-col ">
                    <h2 className=' lg:text-lg py-2 text-xl text-start font-logo '>Access to the large scientific community</h2>
                    <p className=' text-md text-justify'>
                        We believe that connections are key to success in any field, and that's especially true in science and engineering. 
                        That's why we're dedicated to providing you with opportunities 
                        to connect with other scientists and engineers from around the world.
                    </p>
                </div>

                <div className="dark:bg-slate-900 flex leading-7 py-16 justify-center px-10 xl:px-4 flex-col ">
                    <h2 className=' text-xl lg:text-lg py-2 text-start font-logo '>Cutting-Edge Information</h2>
                    <p className=' text-md text-justify'>
                        Stay up-to-date with the latest scientific and engineering news and trends with our blog and newsletter.
                        Our experts will provide insights, analysis, and advice on the topics that matter most to you.
                    </p>
                </div>

            </div>
        </div>
        </>
    )
}