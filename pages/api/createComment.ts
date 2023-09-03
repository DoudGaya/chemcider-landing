import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

export default function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({name: "John Doe"})
}