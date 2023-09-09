import { LearningHome } from "@/components/learning/LearningHome"
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import { AiBanner } from "@/components/learning/LearningBanner"
import LearningContents from "@/components/learning/LearningContents"





const learning = () => {
    // const data = await getLearningResource()
    return (
        <>
            <div className="">
                <AiBanner />
                <LearningContents />
            </div>
        </>
    )
}

export default learning