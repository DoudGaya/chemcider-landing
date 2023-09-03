import Image, { StaticImageData } from "next/image"
import { productImages } from '@/lib/data'


const image = productImages.map( item => {
    return <Image src={item.img} key={item.id} className=' xl:snap-center' alt='Chemcider Product' />
})

export const StoreImage = () => {
    return (
        <div className=" flex flex-col py-6 lg:py-6 overflow-x-auto items-center justify-center dark:brightness-[90%]">
            <h2 className=" md:hidden font-raleway text-2xl  flex text-center ">Chemcider Store </h2>
                <div className="flex snap-x xl:snap-x-none overflow-x-scroll xl:overflow-x-hidden space-x-6 h-[250px] border-r-2 py-6 border-gray-500 rounded-r-lg overflow-hidden ">
                    {image}
                </div>
        </div>
    )
}