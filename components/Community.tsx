import comIMG from '../public/community.png'
import comIMGDark from '../public/community_dark.png'
import Image from "next/image"
import Link from "next/link"
import {BsDiscord} from 'react-icons/bs'

const Community = ( { openModal }: any) => {
    return (
        <>
        <section className=" flex flex-col px-6 md:px-0 mb-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" px-4 md:my-10 py-10 space-y-6 lg:space-y-8 flex flex-col justify-center ">
                    <h2 className='lg:text-2xl py-2 text-start text-xl font-bold text-[rgb(34,177,197)] font-logo'>Join our community for free</h2>
                        <p className=''>
                            Join our vibrant community of scientists, engineers, and technicians.
                            Connect with like-minded professionals, share ideas, and work on innovative projects.
                            Experience seamless communications and connect with a global community of professionals
                            from different parts of the world all in one place. Join the community of experts today and turn your ideas into reality.
                    </p>

                    <div className=" grid grid-cols-1 gap-y-4 md:gap-0 sm:gap-x-4 md:gap-x-6 ">
                        <Link href={""} className=' py-4 px-6 bg-[rgb(34,176,196)] dark:hover:bg-[rgb(34,176,196)] text-white font-semibold dark:bg-purple-50/30 rounded-md: flex space-x-3 items-center'>
                       <BsDiscord className="h-8 w-8 fill-white flex-none" />
                        <p>Join Our Discord Server</p>
                    </Link>

                    {/* <button onClick={openModal} className=' py-4 px-6 bg-[rgb(34,176,196)] dark:hover:bg-[rgb(34,176,196)] text-white font-semibold dark:bg-purple-50/30 rounded-md: flex space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <p>Visit the Web App </p>
                    </button> */}
                </div>

                </div>

                <div className=" items-center justify-center overflow-hidden flex  md:py-10 md:px-10">
                    <Image src={comIMG} className=" object-contain block dark:hidden " alt="chemcider community" />
                    <Image src={comIMGDark} className=" object-contain hidden dark:block " alt="chemcider community" />
                </div>
            </div>
        </section>
        </>
    )
}


export default Community