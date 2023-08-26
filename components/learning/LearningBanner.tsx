import Link from "next/link"

export const AiBanner  = () => {
    return (
        <>
            <div className=" w-full px-10 py-20 bg-gradient-to-r bg-primary via-[#01909aee]" >
                <div className=" w-full flex h-full flex-col py-6 space-y-6 justify-center mx-auto max-w-6xl my-auto items-center">
                    <h1 className=" lg:text-3xl text-2xl text-center font-raleway">Welcome to Chemcider's learning resource</h1>
                    <div className=" grid gap-x-4 gap-y-6 py-5 w-full grid-cols-1 items-center lg:grid-cols-3">
                        <div className=" border text-white font-raleway text-xl w-full py-4 px-3 rounded-lg hover:bg-brand-grey cursor-pointer border-secondary text-center">Science</div>
                        <div className=" border text-white font-raleway text-xl w-full py-4 px-3 rounded-lg hover:bg-brand-grey cursor-pointer border-secondary text-center">Technology</div>
                        <div className=" border text-white font-raleway text-xl w-full py-4 px-3 rounded-lg hover:bg-brand-grey cursor-pointer border-secondary text-center">Engineering </div>
                    </div>
                <div className=" xl:left-10 bottom-10">
                    <Link href={'#'} className=" bg-brand-grey text-white rounded-lg hover:bg-brand-grey/90 cursor-pointer px-6 py-4">
                        Join our Team of Authors
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}