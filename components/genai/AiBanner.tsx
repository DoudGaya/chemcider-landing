import Link from "next/link"

export const AiBanner  = () => {
    return (
        <>
            <div className=" h-[400px] w-full relative bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900" >
                <div className=" w-full h-full justify-center flex flex-col items-center">
                    <div className=" col-span-2 text-white flex flex-col items-center ">
                        <h1 className=' font-ai text-6xl tracking-wide'>AI is not taking over the world... <span>YOU ARE</span> </h1>
                        <h4 className=' text-xl font-thin'>Learn how to leverage the power of AI, and you'll never be disappointed of what's coming...</h4>
                    </div>
                <div className=" absolute left-10 bottom-10">
                    <Link href={'#'} className=" bg-slate-600 rounded-full font-ai hover:bg-green-700 cursor-pointer px-[40px] py-[10px]">
                             Become our AI story writer
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}