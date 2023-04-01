import { SiOpenai } from 'react-icons/si'
import AIS from './AIS'

const aitexts = [
    {
        id: 1,
        title: 'Get AI support with our AI model ',
        description: 'We offers engineers and scientists a powerful tool for getting instant solutions to technical problems using ChatGPT, an intelligent language model trained by OpenAI. The platform is designed to provide accurate responses to technical questions and is accessible from anywhere. We are committed to providing reliable and trustworthy information, and our language model is constantly updated with the latest data. With ChatGPT, you can get the answers you need quickly and efficiently.'
    },

    {
        id: 2,
        title: 'Generate visual results with DALL-E',
        description: 'We offers engineers and scientists the ability to generate visually stunning images using DALL-E, a powerful image generation model developed by OpenAI. Our platform provides an easy-to-use and efficient interface for generating unique and complex images that can enhance technical work. DALL-E is trained on a vast dataset and constantly improving to meet the needs of the scientific community. With just a few clicks, users can customize their images to match their needs, making DALL-E an essential tool for enhancing visual communication in engineering and science.'
    }
]


const GenAI = ({ openModal }: any) => {
    
    const aicontents = aitexts.map( items => <AIS key={items.id} openModal={openModal} items={items} />)

    
    return (
        <>
        <div className=" md:px-2 py-10 px-8 my-6">
             <div className=" text-2xl space-x-2 items-center border-slate-500 py-2 max-w-max font-semibold flex">
              <span className=''> <SiOpenai />   </span>            
               <span className=' text-[rgb(14,132,100)]'>Generative AIs by</span>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-x-6 gap-y-2">
                {aicontents}
             </div>
        
        </div>
        </>
    )
}

export default GenAI