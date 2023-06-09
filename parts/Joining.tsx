import Link from "next/link"
import { useState } from "react"

const Joining = () => {
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [contributorFeedback, setContributorFeedback] = useState(false)



    const submitContributor = (event: any) => {
        event.preventDefault()
        // make an API post request to submit the records
        return setContributorFeedback(true)

    }



    return (
        <div className=" grid xl:grid-cols-2 py-[90px] xl:py-[150 border-[rgb(34,177,197)]  font-logo] px] space-y-6">
           <div className=" flex w-full space-y-4 flex-col px-10">
            <h3 className="text-xl font-bold text-[rgb(34,177,197)] font-logo ">Become a Publisher in Chemcider</h3>
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
                <form onSubmit={submitContributor} className=" flex flex-col space-y-6">
                <div className="px-8  grid gap-y-3 md:grid-cols-2 gap-x-6 ">
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">First Name</p>
                        <input type="text" onChange={(e) => {setFirstName(e.target.value)}} placeholder="First Name" className=" border-[rgb(34,177,197)] text-[rgb(34,177,197)] font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                    </label>
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Surname</p>
                        <input type="text" onChange={(e) => {setSurname(e.target.value)}} placeholder="Surname " className=" border-[rgb(34,177,197)] text-[rgb(34,177,197)] font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                    </label>
                </div>
                <div className="px-8  grid gap-y-3 md:grid-cols-2 gap-x-6 ">
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Email Address</p>
                        <input type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email Address" className=" border-[rgb(34,177,197)] text-[rgb(34,177,197)] font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                    </label>
                    <label htmlFor="first Name" className=" flex gap-y-4 flex-col ">
                        <p className=" hidden">Phone Number</p>
                        <input type="text" onChange={(e) => {setPhone(e.target.value)}} placeholder="Phone Number " className=" border-[rgb(34,177,197)] text-[rgb(34,177,197)] font-logo] py-2 px-3 bg-transparent border focus:outline-none rounded-lg " />
                    </label>
                </div>
                <div className=" px-8">
                    <div className=" flex w-full">
                        <button className=' bg-[rgb(34,177,197)] px-10 py-2 w-full rounded-lg text-blue-100'>Submit</button>
                    </div>
                </div>
           </form>
           :

           ( 
           <div className=" px-10">
            <p className=" my-10">Thanks for joining our publishers list. check this <Link className=" text-[rgb(34,177,197)]" href={'/contribution'}>link</Link> to find out about our contibution guidlines</p> 
           </div>
           )
           }
            {/* <div className="grid sm:grid-cols-2 xl:py-10 gap-y-4 xl:gap-y-0 md:grid-cols-3 px-8 grid-cols-1 gap-x-6">
                <div className=" bg-gradient-to-r from-white to-slate-200 text-slate-950 dark:from-black dark:to-slate-800 rounded-r-md h-[100px] border-r border-slate-600 flex flex-row items-center drop-shadow-2xl space-x-4 px-4 py-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 dark:stroke-slate-400 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <p className=" dark:text-slate-200">Technology</p>

                </div>
                <div className=" bg-gradient-to-r from-white to-slate-200 text-slate-950 dark:from-black dark:to-slate-800 rounded-r-md h-[100px] border-r border-slate-600 flex flex-row items-center drop-shadow-2xl space-x-4 px-4 py-6">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 dark:stroke-slate-400 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>  
                <p className=" dark:text-slate-200">Science </p>
                 
                 </div>
                <div className=" bg-gradient-to-r from-white to-slate-200 text-slate-950 dark:from-black dark:to-slate-800 rounded-r-md h-[100px] border-r border-slate-600 flex flex-row items-center drop-shadow-2xl space-x-4 px-4 py-6">
             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 dark:stroke-slate-400 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                    <p className=" dark:text-slate-200">Engineering </p>              
                 </div>
              
            </div> */}
 
        </div>
    )
}

export default Joining