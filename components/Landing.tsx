import Link from 'next/link'
import Image from 'next/image'
import landings from '..//public/small.png'
export const Landing = () => {
    return (
        <>
        <div className=" lg:h-screen flex  w-full bg-cover">
            <div className=" w-full h-full bg-gradient-to-r backdrop-blur-sm from-black via-black to-slate-900 flex flex-col justify-center items-center">
             <div className=" xl:w-[1200px] w-full h-full grid gap-y-10 lg:gap-y-0 grid-cols-1 py-16 lg:py-0 lg:grid-cols-2 justify-center text-center lg:text-start">
                <div className=" space-y-6 flex lg:items-start justify-center flex-col px-4 lg:px-0">
                    <div className="xl:text-5xl text-3xl text-white font-semibold">Welcome to <span className=' text-blue-400 font-logo'>Chemcider</span> your professional network</div>
                    <div className="xl:text-2xl text-white text-xl">Share, Connect and Promotes</div>
                    <div className=" flex flex-col xl:flex-row xl:space-x-6 justify-center pt-10 px-10 lg:px-0 xl:space-y-0 space-y-8">
                    <Link href={'#'} className=' py-3 px-10 text-white hover:bg-slate-800/40 hover:text-white border-slate-100 border-2  font-bold text-xl'>
                       Articles
                    </Link>
                    <Link href={'#'} className=' py-3 px-6 text-white bg-slate-900 text-xl border-slate-900 border-2 font-bold '>
                        Jobs
                    </Link>
                </div>
                </div>
                <div className=" h-full flex items-center">
                    <div className=" gap-4 overflow-hidden w-full px-6">
                       <Image src={landings} className=' drop-shadow-xl w-full h-full' alt='Chemcider HOME' />
                    </div>
                </div>
             
             </div>
            </div>
        </div>
        </>
    )
}