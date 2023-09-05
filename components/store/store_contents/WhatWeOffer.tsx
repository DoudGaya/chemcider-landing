import Image, { StaticImageData } from 'next/image'

interface StoreContent {
    id: number;
    svg: StaticImageData;
    title: string;
    message: string
}


export const WhatWeOffer = ({ single }: {single: StoreContent}) => {
    return (
        <div className=" flex flex-col justify-center  text-center items-center">
            <span className=' p-4 border-2 border-primary rounded-full my-2'>
                <Image src={single.svg} alt={single.title} className=' dark:fill-white h-10 w-10' />
            </span>
            <h3 className=' font-poppin text-xl pt-3'>{single.title}</h3>
            <p className=' my-6 font-light font-raleway text-lg lg:text-base '>
                {single.message}
            </p>
            
        </div>
    )
}