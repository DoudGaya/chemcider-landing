import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true,
}
export default function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({name: "John Doe"})
}