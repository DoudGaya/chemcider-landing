import landing from '../public/landing.jpg'
import Link from 'next/link'

export const Landing = () => {
    return (
        <>
        <div className=" h-screen flex  w-full bg-cover " style={ { backgroundImage: `url(${landing.src})`} } >
            <div className=" w-full h-full bg-gradient-to-b backdrop-blur-sm from-black/30 via-slate-800/30 to-slate-900/30 flex flex-col justify-center  items-center">
             <div className=" xl:w-[1200px] w-full h-full flex flex-col justify-center text-center ">
                <div className=" space-y-6 ">
                    <div className=" xl:text-6xl text-4xl text-white font-semibold">Welcome to your professional network</div>
                    <div className=" xl:text-5xl text-white text-2xl">Share, Connect and Promotes</div>
                </div>  
                <div className=" flex flex-col xl:flex-row xl:space-x-6 justify-center pt-10 px-10 xl:space-y-0 space-y-8">
                    <Link href={'#'} className=' py-3 px-6 text-white hover:bg-slate-800/40 hover:text-white border-slate-100 border-2  font-bold text-xl'>
                       Community
                    </Link>
                    <Link href={'#'} className=' py-3 px-6 text-white bg-slate-900 text-xl border-slate-900 border-2 font-bold '>
                        Resource Store
                    </Link>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}