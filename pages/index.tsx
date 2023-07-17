
import Main from "../components/Home"
import { previewData } from "next/headers"
import { client } from "@/lib/sanity.client"

import { groq } from "next-sanity"


const query = groq`
*[_type == "post"]{
   ...,
   author->,
   categories->,
} | order( _createdAt desc)
`


const dataFetching = async () => {
   const posts = await client.fetch(query)
   posts.map( (post: any) => {
      console.log("author", post?.author);
   })
}



export default function Home() {
   dataFetching()
    return (
      <main className="">
         <Main />
      </main>
       )
}
