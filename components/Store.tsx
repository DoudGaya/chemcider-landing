
import Link from 'next/link'
import { StoreImage } from './StoreImages'

const Store = () => {
    return (
        <>
        <section className=' my-10  '>
           <div className=" flex w-full items-center justify-center">
           </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-4 px-6 ">
               <StoreImage />
                <div className=" md:px-6 flex flex-col justify-center">
                    <h2 className=" text-xl mb-6 hidden md:block font-semibold ">Resource Store - For Scientists and Engineers</h2>
                    <p className=' lg:text-base text-justify'>
                        With a vast selection of products and unbeatable prices, we are committed to delivering exceptional value to our customers. Our user-friendly website 
                        makes shopping a breeze, and our knowledgeable team is always available to assist you. Plus, 
                        we offer fast shipping and secure payment options to ensure a hassle-free shopping experience. 
                        With regular promotions and discounts, 
                    </p>
                   <div className=" flex my-6">
                   <Link href={'/store'} className=' w-full py-3 px-8 bg-[rgb(72,149,144)] dark:hover:bg-[rgb(72,149,144)]  text-white font-semibold flex space-x-3 items-center'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                        <p>Visit the Store</p>
                    </Link>
                   </div>
                  
                </div>
            </div>
        </section>
        </>
    )
}
export default Store