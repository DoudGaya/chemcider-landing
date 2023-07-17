import Link from 'next/link'
import { GiMaterialsScience } from 'react-icons/gi'
import { MdEngineering } from 'react-icons/md'
import { MdOutlineBiotech } from 'react-icons/md'


interface links {
    id: number,
    name: string,
    url: string,
    icon: any
}

const links: links [] = [
    {
        id: 1,
        name: 'science',
        url: '/science',
        icon: ( <GiMaterialsScience size={36} /> )
    },
    
    {
        id: 2,
        name: 'Technology',
        url: '/technology',
        icon:  ( <MdOutlineBiotech size={36} /> )
    },
    {
        id: 3,
        name: 'Engineering',
        url: '/engineering',
        icon:  ( <MdEngineering size={36} /> )
    },
]
export const Landing = () => {
    return (
        <>
        <div className="lg:h-[90vh] flex w-full bg-cover">
            <div className="w-full h-full dark:bg-gradient-to-b backdrop-blur-sm dark:from-black dark:via-black dark:to-slate-900 flex flex-col justify-center items-center">
             <div className="xl:max-w-[1200px] w-full h-full flex items-center text-center py-16 lg:py-0 justify-center">
                <div className="space-y-6 flex justify-center w-full flex-col px-4 lg:px-0">
                    <div className="xl:text-7xl text-2xl dark:text-white font-semibold font-logo">Welcome to <Link href={'/'} className=' text-[rgb(34,177,197)]'>Chemcider Inc. </Link></div>
                    <div className="xl:text-2xl font-raleway dark:text-white text-xl">Free <span className=' hover:underline cursor-pointer underline-offset-2 text-[rgb(34,177,197)]'>open-source</span> learning resource for scientists and technicians</div>
                    <div className="flex flex-col xl:flex-row xl:space-x-6 justify-center pt-10 px-10 lg:px-0 xl:space-y-0 space-y-8">
                    <div className="grid lg:grid-cols-3 gap-y-6 lg:gap-x-10">
                    {
                        links.map((lnk) => {
                            return (
                            <Link key={lnk.id} href={lnk.url}>
                                <div className='border-dashed flex items-center space-x-4 hover:bg-primary/10 border border-primary py-8 px-16 rounded-xl '>
                                    {lnk.icon} 
                                    <p className='text-lg'>{lnk.name}</p>
                                </div>
                            </Link>
                            )
                        })
                    }
                   </div>
                </div>
                </div>
             
             </div>
            </div>
        </div>
        </>
    )
}