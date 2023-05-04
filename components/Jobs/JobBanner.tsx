import Image from "next/image"
import job from '../../public/jobs/job.png'
import { SearchJobs } from "./SearchJobs"
import Link from "next/link"


export const JobBanner = () => {
    return (
        <>
            <div className=" w-full bg-slate-50 border-b border-slate-300 dark:border-slate-700 dark:bg-slate-950  flex-col flex items-center ">
                <div className=" bg-white dark:bg-black dark:text-white dark:border-slate-700 shadow-md border-b w-full flex py-4 px-[100px]">
                   <Link href={'/'}>
                      <p className=" text-lg"> Chemcider Inc</p>
                   </Link>
                </div>
                <div className=" w-full justify-between flex py-10 px-[100px] h-[100px] ">
                    <div className=" grid gap-3  grid-cols-3">
                        <div className=" w-[60px] flex items-center   justify-center from-white dark:from-black dark:border-slate-700 dark:to-slate-800 dark:shadow-slate-500 cursor-pointer via-slate-50 to-slate-100 drop-shadow-lg border border-slate-200 bg-gradient-to-br  h-[60px]">
                       
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>

                        </div>
                        <div className=" w-[60px] flex items-center justify-center from-white dark:from-black dark:border-slate-700 dark:to-slate-800 dark:shadow-slate-500 cursor-pointer via-slate-50 to-slate-100 drop-shadow-lg border border-slate-200 bg-gradient-to-br  h-[60px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        </div>
                        <div className=" w-[60px] flex items-center justify-center from-white dark:from-black dark:border-slate-700 dark:to-slate-800 dark:shadow-slate-500 cursor-pointer via-slate-50 to-slate-100 drop-shadow-lg border border-slate-200 bg-gradient-to-br  h-[60px]">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>

                        </div>
                    </div>
                    <div className="">
                         <button className=" py-3 px-6 bg-gradient-to-r from-slate-800 to-slate-950 border border-slate-700 text-white  font-logo">Post a job for free</button>
                    </div>
                </div>
             <div className=" w-full py-10 flex items-center flex-col justify-center space-x-6  border-gray-200 px-10 rounded-full py-6">
                <div className=" text-5xl dark:from-white dark:via-slate-100 dark:to-slate-300 font-logo font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-700 via-slate-900 to-slate-950 ">The Job Portal</div>
               <div className=" py-10 w-1/2 mx-auto ">
                    <SearchJobs />
               </div>
             </div>
            </div>
        </>
    )
}