import { useState } from "react"
import HashLink from 'next'

interface links {
    id: number,
    name: string,
    url: string,
}

const navLinks: links[] = [

    {
        id: 1,
        name: 'Welcome ',
        url: '#welcome'
    },

    {
        id: 2,
        name: 'Why Contribute ',
        url: '#whycontribute'
    },

    {
        id: 3,
        name: 'Step 1',
        url: '#guidlines'
    }

]

const Contributing = () => {


    const [active, setActive] = useState(0)


    const updateActive = (id: number) => {
        console.log(id)
    }
    return (
        <>
            <div className=" flex flex-row text-gray-700 dark:text-gray-400">
                <div className="hidden lg:flex w-1/5 top-0 border-l border-slate-700">
                    <ul className=" w-full pr-2 flex flex-col space-y-1">
                      { navLinks.map(( params ) => {
                        return (
                            <li key={params.id} className=" w-full ">
                                <a href={params.url} onClick={() => updateActive(params.id)} className=" active:border-r text-primary boder-l hover:border-l-2 border-transparent hover:border-primary font-semibold text-lg px-3 py-2 flex w-full hover:bg-primary/40">
                                    {params.name}
                                </a>
                            </li>
                        )
                      })}
                    </ul> 
                </div>
            <div className=" dark:text-gray-400 w-4/5 text-gray-700 flex flex-col space-y-6">
            <h1 className=" text-primary text-2xl items-center flex after:text-gray-600 font-raleway after:text-xl cursor-pointer font-bold after:content-['#'] after:ml-2 after:hover:flex after:hidden"
            >Welcome 😊</h1>
            <p className=" text-lg">Thank you for your interest in contributing to our website! 
                We welcome your contributions and encourage you to follow these guidelines to ensure
                 a smooth and collaborative experience for everyone.
            </p>
            <h1 id={'whycontribute'} className=" text-primary text-2xl items-center flex after:text-gray-600 font-raleway after:text-xl cursor-pointer font-bold after:content-['#'] after:ml-2 after:hover:flex after:hidden">Why Contribute?</h1>
            <ul className=" flex flex-col space-y-5">
                <li className="text-lg ">
                    <span className="text-primary ">Leave Your Mark:</span> Your contributions will make a lasting impact on the scientific community and beyond. By sharing your insights, discoveries, and perspectives, you have the power to shape the future of scientific knowledge.
                </li>
                <li className="text-lg ">
                <span className="text-primary ">Expand Your Horizons:</span> Through contributing, you'll embark on 
                a journey of continuous learning. Engage with like-minded individuals, exchange ideas, and deepen 
                your understanding of the world we live in. Discover new fields of study, delve into fascinating research, and broaden your intellectual horizons.
                </li>

                <li className="text-lg">
                <span className="text-primary">Amplify Your Voice:</span> Our platform provides a powerful voice for scientists, researchers, and enthusiasts from all walks of life. Break down barriers, bridge gaps, and foster collaboration among diverse perspectives.
                 Your contribution can pave the way for groundbreaking discoveries and innovative solutions.
                </li>

                <li className="text-lg">
                    <span className="text-primary ">Connect and Collaborate:</span> Forge meaningful connections with experts, 
                    mentors, and aspiring scientists worldwide. Our community thrives on collaboration, encouraging fruitful discussions, and igniting new 
                    collaborations that transcend borders. Together, we can accelerate the pace of scientific progress.
                </li>

                <li className="text-lg">
                <span className="text-primary">Inspire Future Generations:</span> Your contributions have the
                potential to ignite a spark in young minds and inspire the next generation of scientists. By sharing your knowledge, you empower others to explore, question, and dream. 
                Be a part of the movement that fuels scientific curiosity and shapes the innovators of tomorrow.
                </li>
            </ul>

            <h1 id='guidlines' className=" text-primary text-2xl items-center flex after:text-gray-600 font-raleway after:text-xl cursor-pointer font-bold after:content-['#'] after:ml-2 after:hover:flex after:hidden"
            >Guidelines</h1>
        </div>
            </div>
        </>
    )
}

export default Contributing