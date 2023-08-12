
import { GiMaterialsScience } from 'react-icons/gi'
import { BlogItem } from '@/components/BlogList'
import { groq } from 'next-sanity'



// const articlesQuery = groq`
// *[_type='articles']
// `


const articles = () => {
    return (
      <div className=" flex flex-col">
          <div className="h-[40vh] border-b-2 ">
            <div className="max-w-[1200px] h-full flex flex-col items-center  mx-auto ">
                <div className="flex items-center space-x-6 h-5/6">
                    <GiMaterialsScience size={100} color='text-primary' className='stroke-primary ' />
                    <p className='text-7xl font-logo text-primary'>Science Dome</p>
                </div>
            </div>
           
        </div>
        <div className=" max-w-[1000px] flex w-full mx-auto  ">
          <BlogItem />
        </div>
      </div>
    )
}


export default articles