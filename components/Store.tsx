import products from '../public/products.svg'
import Image, { StaticImageData } from "next/image"
import product1 from '../public/products/product1.png'
import product2 from '../public/products/product2.png'
import product3 from '../public/products/product3.png'
import product4 from '../public/products/product4.png'
import product5 from '../public/products/product5.png'
import product6 from '../public/products/product6.png'


const productImages = [
    {
        id: 1,
        img: product1
    },

    {
        id: 2,
        img: product2
    },

    {
        id: 3,
        img: product3
    },

    {
        id: 4,
        img: product4
    },

    {
        id: 5,
        img: product5
    },

    {
        id: 6,
        img: product6
    },
]

const image = productImages.map( item => {
    return <Image src={item.img} key={item.id} className=' xl:snap-center' alt='Chemcider Product' />
})
const Store = ({ openModal }: any) => {
    return (
        <>
        <section className=' my-10  '>
           <div className=" flex w-full items-center justify-center">
           </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-4 px-6 ">
                <div className="h-[400px] flex flex-col items-center justify-center dark:brightness-[90%]">
                    <h2 className=" text-lg md:hidden font-semibold flex text-center ">Resource Store - For Scientists and Engineers </h2>
                       <div className="flex snap-x xl:snap-x-none overflow-x-scroll xl:overflow-x-hidden space-x-6 h-[250px] border-r-2 py-6 border-gray-500 rounded-r-lg overflow-hidden ">
                            {image}
                       </div>
                </div>
                <div className=" md:px-6 flex flex-col justify-center">
                    <h2 className=" text-xl mb-6 hidden md:block font-semibold ">Resource Store - For Scientists and Engineers</h2>
                    <p className=' lg:text-base text-justify'>
                        With a vast selection of products and unbeatable prices, we are committed to delivering exceptional value to our customers. Our user-friendly website 
                        makes shopping a breeze, and our knowledgeable team is always available to assist you. Plus, 
                        we offer fast shipping and secure payment options to ensure a hassle-free shopping experience. 
                        With regular promotions and discounts, 
                    </p>
                   <div className=" flex my-6">
                   <button onClick={openModal} className=' w-full md:w-auto py-4 px-8 bg-[rgb(72,149,144)] dark:hover:bg-[rgb(72,149,144)]  text-white font-semibold dark:bg-purple-50/30 flex space-x-3 items-center'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                        <p>Visit the Store</p>
                    </button>
                   </div>
                  
                </div>
            </div>
        </section>
        </>
    )
}
export default Store