import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"


export default function LearningContents( {learningData}: any) {
    console.log(learningData)
    return (
        <>
        <div className=" w-full">
            <div className=" w-[70%] mx-auto">
            <div className=" flex flex-col items-center text-center space-y-6 mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 stroke-slate-400 storke-2 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                <h2>Sorry, We currently do not have any news for you </h2>
            </div>
            </div>
        </div>
        </>
    )
}




export const getStaticProps = async () => {
    const articlesQuery = groq`*[_type=="author"]`
    const learningData = await client.fetch(articlesQuery)
        return {
            props: {
            learningData
        },
    }
}
