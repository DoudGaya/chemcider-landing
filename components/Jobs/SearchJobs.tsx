export const SearchJobs = () => {
    return (
        <>
        <div className=" rounded-lg border bg-white dark:bg-slate-500 border-gray-300 dark:border-slate-600 px-2 py-2 flex space-x-2 ">
            <input type="search" placeholder="Search for a Job" className=" bg-white dark:bg-slate-500 outline-none px-2 py-2 w-full rounded-lg" />
            <button className=" py-2 px-6 rounded-lg bg-black text-white">Search</button>
        </div>
        </>
    )
}