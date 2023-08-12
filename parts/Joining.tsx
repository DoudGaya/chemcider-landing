import Link from "next/link"
import { useState } from "react"
import { ContributingForm } from "./ContributingForm";


const professions: string[] = ['science', 'tecnology', 'engineering']

const Joining = () => {
    

    

    const [contributorFeedback, setContributorFeedback] = useState(false)


    return (
        <div className=" grid xl:grid-cols-2 py-[90px] xl:py-[150 border-slate-400  font-logo] px] space-y-6">
           <div className=" flex w-full space-y-4 flex-col px-10">
            <h3 className="text-xl font-bold  text-slate-900 dark:text-slate-400 font-logo ">Become a Publisher in Chemcider</h3>
                <p className=" dark:text-white  md:px-0 text-justify ">
                    {/* We provide global partnership with some of the world most trusted  */}
                    Ignite your curiosity and join a vibrant community of knowledge seekers and contributors. 
                    Our website is a haven for those who are passionate about science and eager to share their expertise. 
                    Together, we can revolutionize the way knowledge is shared and inspire generations to come.    
                 </p>
                <div className=" py-10 ">
                    <Link href={'/contribution'} className=" dark:text-white px-4 text-lg py-3 from-slate-100 via-white to-white  bg-gradient-to-r drop-shadow-2xl border-y border-slate-700 dark:from-black dark:via-slate-900 dark:to-slate-900">
                        Contribute
                    </Link>
                </div>
           </div>
           {
                !contributorFeedback ?
               <ContributingForm />
           :
            ( 
            <div className=" px-10">
                <p className=" my-10">Thanks for joining our publishers list. check this <Link className="  text-slate-900 dark:text-slate-400" href={'/contribution'}>link</Link> to find out about our contibution guidlines</p> 
            </div>
            )
           }
        </div>
    )
}

export default Joining