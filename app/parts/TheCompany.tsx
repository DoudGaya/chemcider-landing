import ceo from '../../public/ceo.jpeg'
import Image from 'next/image'

const Company = () => {
    return (
        <>
         <div className=" w-full flex flex-col py-10 items-center">
            <div className=" w-[1200px] mx-auto space-y-6">
            <h2>The Team</h2>
                <div className=" grid grid-cols-3 py-10 bg-green-200 px-4 gap-x-6">
                <div className=" bg-red-100 p-4">
                   <div className=" flex bg-white flex-col pb-6 space-y-8 shadow-2xl backdrop-blur-2xl  items-center rounded-3xl overflow-hidden">
                    <Image src={ceo} alt="Abdulrahman Dauda Gaya" className=' shadow-inner rounded-full  object-cover' />
                   <div className=" flex w-full flex-col">
                    <p className=' text-[rgb(15,55,60)] '>Senior Executive</p>
                   <p className=' font-semibold text-xl'>Abdulrahman Dauda Gaya</p>
                   </div>
                   </div>
                </div>
                <div className=" bg-purple-100 p-2">
                    j
                </div>
                <div className=" bg-purple-100 p-2">
                    j
                </div>
                </div>
            </div>
            </div>
        </>
    )
}


export default Company