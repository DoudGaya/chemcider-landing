import { SiOpenai } from 'react-icons/si'
import AIS from './GenAI'
import Image from 'next/image'
import Link from 'next/link'
import ai1 from '../public/ai1.jpg'
import ai2 from '../public/ai2.jpg'
import ai3 from '../public/ai3.jpg'




const GenAI = () => {
    return (
        <>
           <div className=" grid grid-cols-1 xl:grid-cols-3">

           <div className=" px-10 col-span-2 py-10 flex flex-col ">
            <Link href={'#'} className="flex flex-row items-center space-x-3 px-2 py-2">
                    <span className='py-2 border-l-2 px-3'>
                        <SiOpenai  className=' flex  w-8 xl:w-10 h-8 xl:h-10 ' />
                    </span>
                    <div className=" flex flex-col">
                    <span className=' text-[rgb(39,94,79)] text-lg font-logo'>Generative AIs</span>
                    <small>Get access to large database of AI tools</small>
                    </div>
                </Link>


              <div className=" pt-10 space-y-6 text-justify  xl:pr-20">
              <p>
                    With the rapid advancements in the field of artificial intelligence, it can be overwhelming to keep up with 
                    the latest tools and technologies. We designed these advance search system to simplify this process and make it easy for
                    you to discover the AI tools that best fit your needs.
                </p>
                
                <p>
                Our database includes a wide range of tools, from machine learning frameworks and natural language processing libraries, 
                to computer vision platforms and deep learning frameworks. We've curated a list of the most popular and cutting-edge AI 
                tools, so you can stay up-to-date with the latest advancements in the field.

                </p>

                <div className=" w-full flex ">
                  <Link href={'/genai'} className='py-3 w-full bg-[rgb(39,94,79)] text-white font-logo text-lg md:w-1/2 text-center '>
                        AI database
                  </Link>
                </div>
              </div>
           </div>

           <div className="  h-[500px] grid overflow-hidden grid-cols-3">
                <Image src={ai1} alt='' className=' h-full object-cover hover:scale-110 cursor-pointer delay-150 transform transition-all ease-linear duration-150 object-full border-x' />
                <Image src={ai2} alt='' className=' h-full object-cover hover:scale-110 cursor-pointer delay-150 transform transition-all ease-linear duration-150 object-full border-x' />
                <Image src={ai3} alt='' className=' h-full object-cover hover:scale-110 cursor-pointer delay-150 transform transition-all ease-linear duration-150 object-full border-x' />
           </div>
           </div>
        </>
    )
}

export default GenAI