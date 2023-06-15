
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



export default  function Home() {


   // const posts = await client.fetch(query)
    return (
      <main className="">
         <Main />
      </main>
       )
}
