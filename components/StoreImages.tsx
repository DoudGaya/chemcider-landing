import Image, { StaticImageData } from "next/image"
import { productImages } from '@/lib/data'


const image = productImages.map( item => {
    return <Image src={item.img} key={item.id} className=' xl:snap-center' alt='Chemcider Product' />
})

export const StoreImage = () => {
    return (
        <div className=" flex flex-col items-center justify-center dark:brightness-[90%]">
            <h2 className=" text-lg md:hidden font-semibold flex text-center ">Resource Store - For Scientists and Engineers </h2>
                <div className="flex snap-x xl:snap-x-none overflow-x-scroll xl:overflow-x-hidden space-x-6 h-[250px] border-r-2 py-6 border-gray-500 rounded-r-lg overflow-hidden ">
                    {image}
                </div>
        </div>
    )
}