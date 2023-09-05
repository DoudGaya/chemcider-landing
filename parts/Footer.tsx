import Link from 'next/link'


interface FooterLinks {
    id: number
    link: string
    name: string
}

const footerLinks: FooterLinks[] = [
    {
        id: 1,
        link: '#',
        name: 'Generative AI'
    },

    {
        id: 2,
        link: 'https://discord.gg/RhGuDGSD',
        name: 'Community'
    },

    {
        id: 3,
        link: '/learning',
        name: 'Learning'
    },
    {
        id: 4,
        link: '/store',
        name: 'Chemcider Store'
    },
]

const ProductsLinks = ({ items }: any) => {
    return (
        <button  className=" bg-slate-100 dark:bg-slate-950 transform hover:bg-slate-700 ease-in-out duration-100 py-2  px-6">
            {items.name}
        </button>
    )
}

const urls = footerLinks.map( (items )  => <ProductsLinks key={items.id} items={items} />)

const Footer = ( {openModal}: any ) => {
    return (
    <section className='bg-slate-200 w-full dark:bg-black py-10'>
        <div className=' md:w-full lg:w-[1200px] mx-auto'></div>
        <div className=" grid gap-y-6 md:gap-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className=" px-6 md:px-0 dark:text-slate-200 flex flex-col md:border-r pr-6">
                <h3 className=" text-lg font-semibold">About Us</h3>
                <p>Our mission is to provide scientists and engineers with access to quality products and connections that will help them advance their research and projects. Whether you're looking for cutting-edge technology, trusted suppliers, or like-minded peers, we've got you covered.</p>
            </div>
            <div className=" dark:text-slate-200 flex flex-col md:border-r space-y-3 px-6">
            <h3 className=" text-lg font-semibold">Products</h3>
                {urls}
            </div>
            <div className=" dark:text-slate-200 flex flex-col md:border-r px-6">
                <ul className=" flex flex-col space-y-2 my-2">
                    <li className=" w-full">
                        <Link href={'/home'} className=" hover:underline">Home</Link>
                    </li>

                    <li className=" w-full">
                        <Link href={'/about'} className=" hover:underline">About Us</Link>
                    </li>
                    
                    <li className=" w-full">
                        <Link href={'/career'} className=" hover:underline">Career</Link>
                    </li>
                    
                    <li className=" w-full">
                        <Link href={'/store'} className=" hover:underline">Store</Link>
                    </li>

                </ul>
            </div>
            <div className=" dark:text-slate-200 flex flex-col px-6">
                <h3 className=" text-lg font-semibold">Contact</h3>
                
                {/* <form action="" className=" flex space-y-2 flex-col my-2">
                    <input type="text" className=" w-full bg-slate-200 py-2 px-4 placeholder:text-slate-700 outline-none border border-slate-400 " placeholder="Email" />
                    <input type="text" className=" w-full bg-slate-200 py-2 px-4 placeholder:text-slate-700 outline-none border border-slate-400 " placeholder="Name" />
                    <textarea className=" w-full bg-slate-200 py-2 px-4 placeholder:text-slate-700 outline-none border border-slate-400 h-[100px] " placeholder="Message" ></textarea>
                    <button className=" bg-[rgb(72,149,144)] w-full py-2 ">Send Us a Message</button>
                </form> */}
            </div>
        </div> 
    </section>
            

    )
}

export default Footer