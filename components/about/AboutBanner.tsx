
import Image from 'next/image'
import logo from '../../public/c.png'


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
    return (
        <div className=" w-full flex flex-col ">
            <div className=" py-10 bg-gradient-to-r bg-primary">
                <div className="  mx-auto max-w-4xl">
                    <div className=" flex space-x-5 my-auto h-full items-center">
                    <div className=" h-[200px] flex-none shadow-lg w-[200px] flex overflow-hidden rounded-lg">
                        <Image alt='chemcider' src={logo} className=' w-full object-cover object-center' />
                    </div>
                        <div className=" flex flex-col space-y-4">
                            <p className=' font-logo text-2xl'>Knowledge is free and should be accessible to everyone. Learn from different topics and different authors </p>
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
        <div className=" grid max-w-4xl gap-x-10 py-10 mx-auto grid-cols-2">
                <div className=" flex flex-col space-y-4">
                    <h3 className=" font-logo text-2xl">About Chemcider Inc</h3>
                    <p className=" text-justify ">
                        Welcome to Chemcider Inc., your gateway to boundless knowledge in the realms of science,
                        technology, and engineering. At Chemcider, we believe that learning is the catalyst
                        for progress, and our mission is to foster a community where curiosity knows no bounds.
                    </p>
                </div>
               <div className=" flex flex-col space-y-4">
                    <h3 className=" font-logo text-2xl">Our Vision</h3>
                    <p className=" text-justify">
                        Our vision is a world where anyone with a thirst for knowledge can quench
                        it freely and effortlessly. We aspire to be the global hub where individuals from every corner of the Earth can
                        access, share, and collaborate on cutting-edge insights in science, technology, and engineering.
                    </p>
                </div>
            </div>

        </div>
    )
}