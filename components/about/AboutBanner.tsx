
import Image from 'next/image'
import logo from '../../public/c.png'
import bg from '../../public/about/engineering.jpg'


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


const topics = [
    {
        id: 1,
        name: 'Physical Science', 
        path: '/physical-science',
    },
      {
        id: 2,
        name: 'Life Science', 
        path: '/physical-science',
    },
    {
        id: 3,
        name: 'Technology', 
        path: '/physical-science',
    },
    {
        id: 4,
        name: 'Engineering', 
        path: '/physical-science',
    }
]

export const AboutBanner = () => {
       // dataFetching()
    return (
        <div className=" w-full flex flex-col bg-cover bg-center bg-blend-overlay bg-stone-600/40 " style={{ backgroundImage: `url(${bg.src})`}}>
            <div className=" py-20 bg-gradient-to-r">
                <div className="  mx-auto max-w-4xl bg-primary px-4 py-6 rounded-lg">
                    <div className=" flex space-x-5 my-auto h-full items-center">
                    <div className=" h-[150px] flex-none shadow-lg w-[150px] flex overflow-hidden rounded-lg">
                        <Image alt='chemcider' src={logo} className=' w-full object-cover object-center' />
                    </div>
                        <div className=" flex flex-col space-y-4">
                            <p className=' font-logo text-xl'>Knowledge is free and should be accessible to everyone. Learn from different topics and different authors </p>
                            <div className=" grid grid-cols-4 gap-4">
                                {
                                    topics.map((topic) => {
                                        return (
                                            <div className=" flex px-4 py-2 dark:border-white rounded-lg border border-slate-600 space-x-6">
                                                <p>{ topic.name }</p>
                                            </div>
                                        )
                                    })
                               }
                            </div>
                    </div>
                </div>
                
                </div>
            </div>
       

        </div>
    )
}