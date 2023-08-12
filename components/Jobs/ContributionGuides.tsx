import Contributing from "./Contributing"
import { JobBanner } from "./ContributeBanner"

export const ContributionGuides = () => {
    return (
        <>
        <div className="">
            <JobBanner />
            <div className=" max-w-[1200px] mx-auto px-10 py-10">
                <Contributing />
            </div>
        </div>
        </>
    )
}