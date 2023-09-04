import Image, { StaticImageData } from 'next/image'

interface StoreContent {
    id: number;
    svg: StaticImageData;
    title: string;
    message: string
}


export const WhatWeOffer = ({ single }: {single: StoreContent}) => {
    console.log(single)
    return (
        <div className=" flex flex-col justify-center  text-center items-center">
            <span className=' p-4 border-2 border-primary rounded-full my-2'>
                <Image src={single.svg} alt={single.title} className=' h-10 w-10' />
            </span>
            <h3 className=' font-poppin'>{single.title}</h3>
            <p className=' my-6 font-light font-raleway '>
                {single.message}
            </p>
            
        </div>
    )
}