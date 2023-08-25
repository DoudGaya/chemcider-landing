import Link from "next/link"

export const AiBanner  = () => {
    return (
        <>
            <div className=" h-[300px] w-full relative bg-gradient-to-r bg-primary via-[#01909aee]" >
                <div className=" w-full flex h-full flex-col justify-center mx-auto max-w-6xl my-auto items-center">
                    <h1 className=" text-3xl font-raleway">Welcome to Chemcider's learning resource</h1>
                    <div className=" grid gap-x-4 py-5 w-full  items-center grid-cols-3">
                        <div className=" border text-white font-raleway text-xl w-full py-4 px-3 rounded-lg hover:bg-brand-grey cursor-pointer border-secondary text-center">Science</div>
                        <div className=" border text-white font-raleway text-xl w-full py-4 px-3 rounded-lg hover:bg-brand-grey cursor-pointer border-secondary text-center">Technology</div>
                        <div className=" border text-white font-raleway text-xl w-full py-4 px-3 rounded-lg hover:bg-brand-grey cursor-pointer border-secondary text-center">Engineering </div>
                    </div>
                <div className=" absolute xl:left-10 bottom-10">
                    <Link href={'#'} className=" bg-brand-grey rounded-lg  hover:bg-green-700 cursor-pointer px-[40px] py-[10px]">
                        Join our Team of Authors
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}