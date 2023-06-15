import { MdOutlineBiotech } from 'react-icons/md'
import { BlogList } from '@/components/BlogList'


const Technology = () => {
    
    return (
      <div className=" flex flex-col">
          <div className="h-[50vh] border-b-2 ">
            <div className="max-w-[1200px] h-full flex flex-col items-center  mx-auto ">
                <div className="flex items-center space-x-6 h-5/6">
                    <MdOutlineBiotech size={100} color='text-primary' className='stroke-primary ' />
                    <p className='text-7xl font-logo text-primary'>Science Dome</p>
                </div>
                <div className=" h-1/6 grid grid-cols-5 w-full">
                 
                </div>
            </div>
           
        </div>
        <div className=" max-w-[1000px] flex w-full mx-auto bg-red-400 ">
          <BlogList />
        </div>
      </div>
    )
}


export default Technology