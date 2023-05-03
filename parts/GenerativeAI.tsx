import { SiOpenai } from 'react-icons/si'
import AIS from './GenAI'
import Image from 'next/image'
import Link from 'next/link'
import ai1 from '../public/ai1.jpg'
import ai2 from '../public/ai2.jpg'
import ai3 from '../public/ai3.jpg'

// const aitexts = [
//     {
//         id: 1,
//         title: 'Get AI support with our AI model ',
//         description: 'We offers engineers and scientists a powerful tool for getting instant solutions to technical problems using ChatGPT, an intelligent language model trained by OpenAI. The platform is designed to provide accurate responses to technical questions and is accessible from anywhere. We are committed to providing reliable and trustworthy information, and our language model is constantly updated with the latest data. With ChatGPT, you can get the answers you need quickly and efficiently.'
//     },

//     {
//         id: 2,
//         title: 'Generate visual results with DALL-E',
//         description: 'We offers engineers and scientists the ability to generate visually stunning images using DALL-E, a powerful image generation model developed by OpenAI. Our platform provides an easy-to-use and efficient interface for generating unique and complex images that can enhance technical work. DALL-E is trained on a vast dataset and constantly improving to meet the needs of the scientific community. With just a few clicks, users can customize their images to match their needs, making DALL-E an essential tool for enhancing visual communication in engineering and science.'
//     }
// ]


const GenAI = ({ openModal }: any) => {
    
    // const aicontents = aitexts.map((items) => <AIS key={items.id} openModal={openModal} items={items} />)
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


              <div className=" py-10 space-y-6 text-justify  xl:pr-20">
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
              </div>




           </div>

           <div className=" bg-green-500 h-[500px] grid overflow-hidden grid-cols-3">
                <Image src={ai1} alt='' className=' h-full object-cover hover:scale-110 cursor-pointer delay-150 transform transition-all ease-linear duration-150 object-full border-x' />
                <Image src={ai2} alt='' className=' h-full object-cover hover:scale-110 cursor-pointer delay-150 transform transition-all ease-linear duration-150 object-full border-x' />
                <Image src={ai3} alt='' className=' h-full object-cover hover:scale-110 cursor-pointer delay-150 transform transition-all ease-linear duration-150 object-full border-x' />
           </div>
           </div>
        </>
    )
}

export default GenAI