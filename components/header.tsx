import Link from 'next/link'
const Header = () => {
    return (
        <div className=" z-10">
        <div className=" bg-white dark:bg-black dark:text-white sticky top-0 py-4 lg:py-0  w-full flex justify-between px-6 md:px-20 drop-shadow-sm items-center">
        <div className="  ">
            <Link href="/" rel="">
                <h1 className=" font-logo ">Chemcider</h1>
            </Link>
        </div>

        <div className="lg:hidden">
            <button  className=" p-2 focus:outline-none rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        </div>

        <div className=" hidden lg:flex h-max   justify-center ">
            <ul className=" flex h-full items-center justify-center ">
                <li className=" flex">
                    <Link href="/"  className="h-[70px] py-4 flex items-center dark:bg-gray-800/90 bg-blue-100/40 px-4 border-b-4 border-blue-400">
                           <p> Home </p>
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className=" h-[70px] flex items-center dark:hover:bg-gray-800/90 hover:bg-blue-100/40 px-4 border-b-4 border-transparent hover:border-blue-300  ">
                       <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link href="/products" className=" h-[70px] flex items-center dark:hover:bg-gray-800/90 hover:bg-blue-100/40 px-4 border-b-4 border-transparent hover:border-blue-300  ">
                        <p>Products</p>
                    </Link>
                </li>
                <li>
                    <Link href="/profiles" className=" h-[70px] flex items-center dark:hover:bg-gray-800/90 hover:bg-blue-100/40 px-4 border-b-4 border-transparent hover:border-blue-300  ">
                        <p>Profiles</p>
                    </Link>
                </li>
            </ul>
        </div>

        <div className=" hidden lg:flex space-x-6 ">
            <Link href="/login" className=" py-1 rounded-md px-4 border text-sky-300 border-sky-300 ">Login</Link>
            <Link href="/register" className=" py-1 rounded-md px-4 bg-sky-900 text-white dark:bg-sky-700 dark:text-gray-100 ">Join</Link>
            <button className=" py-2 px-2 rounded-md border-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </button>
        </div>

    </div>
    <div  v-if="state.mobileModal" className="lg:hidden relative px-4  ">
        <div className="absolute z-50 right-8 top-0 bg-white border flex flex-col -mt-4 drop-shadow-lg rounded-lg py-6 px-4 w-1/2">
            <ul  className=" flex flex-col space-y-4 w-full">
                <li className=" w-full">
                    <Link href="/login" className=" py-2 w-full  flex ">
                        Login
                    </Link>
                </li>
                <li className=" w-full">
                    <Link href="/about"  className=" py-2 w-full flex ">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    </div>
    )
}

export default Header