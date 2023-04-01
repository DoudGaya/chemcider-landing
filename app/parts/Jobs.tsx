
interface Jobs {
    id: number
    link: string
    size: string
    logo: string
}

const jobs = [
    {
        id: 1,
        link: '#',
        size: 'big',
        logo: 'Sweden Jobs'
    },

    {
        id: 2,
        link: '#',
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
        size: 'big',
        logo: 'Upwork'
    },
]


const JobsCard = ( { jobs}: any ) => {
    return (
        <>
        <a href="" className={`bg-slate-500 px-6 p-4 hover:bg-slate-700 hover:text-slate-400`}>
            { jobs.logo}
        </a>
        </>
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
            <div className="grid sm:grid-cols-2 md:grid-cols-6 px-8 grid-cols-1 gap-4">
                {jobbings}
            </div>
        </div>
    )
}

export default Jobs