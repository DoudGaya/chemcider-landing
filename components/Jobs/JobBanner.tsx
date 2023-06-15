import Image from "next/image"
import job from '../../public/jobs/job.png'
import Link from "next/link"


export const JobBanner = () => {
    return (
        <>
            <div className=" w-full pt-20 bg-slate-50 border-b border-slate-300 dark:border-slate-700 dark:bg-slate-950  flex-col flex items-center ">
              
            
             <div className=" w-full py-20 flex items-center text-center flex-col justify-center md:space-x-6  border-gray-200 md:px-10">
            <div className=" xl:text-4xl text-2xl dark:text-slate-400 font-logo font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-700 via-slate-900 to-slate-950 "
            >Thanks for your interest in contributing to <span className="text-[rgb(34,177,197)]">Chemcider</span> Inc.</div>
               <div className=" py-10 xl:w-1/2 text-center px-6 md:px-0  w-full ">
                <p className=" md:text-2xl dark:text-slate-400 text-lg -mt-6 font-raleway">Here's some few tips to get you started </p>
               </div>
             </div>
            </div>
        </>
    )
}