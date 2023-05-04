import { JobBanner } from "./JobBanner"

export const MainJobs = () => {
    return (
        <>
        <div className=" ">
            <JobBanner />

            <div className=" w-[1200px] mx-auto py-10 flex justify-center">
            <h2 className=" text-lg ">There are currently no available jobs Posting </h2>
            </div>
        </div>
        </>
    )
}