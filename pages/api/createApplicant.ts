import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = JSON.parse(req.body)
    //  const {
    //         firstName,
    //         lastName,
    //         email,
    //         phone,
    //         profession,
    //         qualification,
    //         gender,
    //         field,
    //     } = JSON.parse(req.body)
    
    try {

        await client.create({...data, _type: 'applicants'})
        // await client.create({
        //     _type: 'applicants',
        //     firstName,
        //     lastName,
        //     email,
        //     phone,
        //     profession,
        //     qualification,
        //     gender,
        //     field
        // })
        
    } catch (error) {
        return res.status(500).json({message: `Couldn't Submit Application`, error})
    }

    return res.status(200).json({message: 'Application send'})
}