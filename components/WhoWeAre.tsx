import engineer from '../public/engineer.jpg'
import { useState } from 'react'
import Link from 'next/link'


export const WhatWeDo = () => {


    const [ subscribe, setSubscribe] = useState('')
    const [submitted, setSubmitted] = useState(false)
    let subscriptionMessage = 'Thanks for your subscription'



    const submitForm = (e: any) => {
        e.preventDefault();
        // make a call to post the email to the database API
        return setSubmitted(true)
    }


    return (
        <>
        <div className=" flex flex-col border-t dark:border-t-0 py-[130px] items-center ">
            <div className="grid md:grid-cols-2 h-full">
            
            <div className="  grid-cols-1 px-10 justify-center leading-7 xl:px-0 flex-col ">
               <div className=" md:px-10 flex flex-col justify-center py-6">
               <h2 className='lg:text-2xl py-2 text-start text-xl font-bold text-[rgb(34,177,197)] font-logo'>Our Mission</h2>
                <p className=' xl:text-base text-justify  '>
                    Our mission is to provide scientists and engineers with access to quality products, resources and connections that will help 
                    them advance their research and projects. 
                    Whether you're looking for cutting-edge technology, trusted suppliers, or like-minded peers, we've got you covered.
                </p>  
                 <div className="flex space-x-4 w-full my-6">
                   <Link href={'/about'} className=' text-center bg-[rgb(34,177,197)] px-10 py-2 w-full rounded-lg text-blue-100'>Learn More</Link>
                </div>
               </div>
            </div>

            <div className=" px-10 justify-center leading-7 xl:px-0 flex-col ">
              
               <div className="md:px-10 flex flex-col leading-7 justify-center py-6">
                <h2 className='flex flex-col lg:text-2xl py-2 text-start text-xl font-bold text-[rgb(34,177,197)] font-logo'>Blog and News</h2>
                    <p className=' text-md text-justify'>
                        Stay up-to-date with the latest scientific and engineering news and trends with our blog and newsletter.
                        Our experts will provide insights, analysis, and advice on the topics that matter most to you. Sign up to 
                        our newsletter to get notified with our latest news updates
                    </p>
                   { !submitted ? <form onSubmit={submitForm} className=" flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full my-6">
                        <input type="text" onChange={(e) => {setSubscribe(e.target.value)}} className=' w-full px-3 text-[rgb(34,177,197)] focus-within:border-blue-800 focus:outline-none bg-transparent border py-2 rounded-lg border-[rgb(34,177,197)]' />
                        <button className=' bg-[rgb(34,177,197)] px-10 py-2 rounded-lg text-blue-100'>Subscribe</button>
                    </form>
                     : ( <p className=' text-[rgb(34,177,197)] my-10 text-lg'>Thanks for your subscription...</p> )
                    }
               </div>
            </div>
            </div>
        </div>
    </>
    )
}