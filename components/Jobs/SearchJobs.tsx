export const SearchJobs = () => {
    return (
        <>
        <div className=" rounded-lg md:border space-y-6 md:space-y-0 md:bg-white md:dark:bg-slate-900 bg-slate-950 border-gray-300 dark:border-slate-600 px-2 py-2 flex flex-col md:flex-row md:space-x-2 ">
            <input type="search" placeholder="Search for a Job" className=" bg-white text-lg py-4 md:py-2 border md:border-0 px-4 dark:bg-slate-900 dark:border-slate-700 outline-none md:px-2 w-full rounded-lg" />
            <button className=" md:py-2 py-4 dark:border dark:border-slate-700 px-6 rounded-lg bg-black text-white">Search</button>
        </div>
        </>
    )
}