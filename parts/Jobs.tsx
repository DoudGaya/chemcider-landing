
interface Jobs {
    id: number
    link: string
    size: string
    logo: string
}

const jobs = [
    {
        id: 1,
        link: '',
        size: 'big',
        logo: 'Turing'
    },

    {
        id: 2,
        link: 'https://vanhack.com/candidates?invite=abdulrahmanrrnh',
        size: 'small',
        logo: 'Vanhack'
    },

    {
        id: 3,
        link: '#',
        size: 'big',
        logo: 'LinkedIn'
    },
    {
        id: 4,
        link: '#',
        size: 'big',
        logo: 'Flex Jobs'
    },

    {
        id: 5,
        link: '#',
        size: 'big',
        logo: 'Remote OK'
    },
    {
        id: 6,
        link: '#',
        size: 'small',
        logo: 'Upwork'
    },
]


const JobsCard = ( { jobs }: any ) => {
    return (
        <a href={jobs.link} target="_blank" className={`bg-slate-500 my-auto text-lg rounded-lg py-10 cursor-pointer px-6 p-4 hover:bg-slate-700 hover:text-slate-400`}>
            {jobs.logo}
        </a>
    )
}

const jobbings = jobs.map(sobs => <JobsCard key={sobs.id} jobs={sobs} />)

const Jobs = () => {
    return (
        <div className=" py-10 flex flex-col space-y-6">
           <div className=" flex w-full items-center flex-col">
            <h3 className=" text-2xl font-bold text-white mx-auto">International Jobs</h3>
                <p className=" text-white mx-auto px-8 md:px-0 text-center text-lg">Get access to quality international Jobs with our partners </p>
           </div>
            <div className="grid sm:grid-cols-2 py-10 md:grid-cols-6 px-8 grid-cols-1 gap-4">
                {jobbings}
            </div>
            <div className=" flex flex-col  items-center text-center justify-center w-full">
                
                <a href="#" className=" flex space-y-2 items-center flex-col">

                    <span className="px-5 py-3 rounded-md text-white bg-black ">More Jobs Portals</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                    
                </a>
                    
            </div>
        </div>
    )
}

export default Jobs