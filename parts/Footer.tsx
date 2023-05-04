

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
        link: '#',
        name: 'Jobs Portal'
    },

    {
        id: 3,
        link: '#',
        name: 'Community'
    },
    {
        id: 4,
        link: '#',
        name: 'Chemcider Store'
    },
]

const ProductsLinks = ({ items }: any) => {
    return (
        <button  className=" bg-slate-100 dark:bg-slate-100  transform hover:bg-slate-700 ease-in-out duration-100 py-2  px-6">
            {items.name}
        </button>
    )
}

const urls = footerLinks.map( (items )  => <ProductsLinks key={items.id} items={items} />)

const Footer = ( {openModal}: any ) => {
    return (
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
                <h3 className=" text-lg font-semibold">Sitemap</h3>
                <ul className=" flex flex-col space-y-2 my-2">
                    <li className=" w-full">
                        <button onClick={openModal} className=" hover:underline">Home</button>
                    </li>

                    <li className=" w-full">
                        <button onClick={openModal} className=" hover:underline">Jobs</button>
                    </li>
                    
                    <li className=" w-full">
                        <button onClick={openModal} className=" hover:underline">Generative AIs</button>
                    </li>
                    
                    <li className=" w-full">
                        <button onClick={openModal} className=" hover:underline">Store</button>
                    </li>

                </ul>
            </div>
            <div className=" dark:text-slate-200 flex flex-col px-6">
                <h3 className=" text-lg font-semibold">Contact</h3>
                <form action="" className=" flex space-y-2 flex-col my-2">
                    <input type="text" className=" w-full bg-slate-200 py-2 px-4 placeholder:text-slate-700 outline-none border border-slate-400 " placeholder="Email" />
                    <input type="text" className=" w-full bg-slate-200 py-2 px-4 placeholder:text-slate-700 outline-none border border-slate-400 " placeholder="Name" />
                    <textarea className=" w-full bg-slate-200 py-2 px-4 placeholder:text-slate-700 outline-none border border-slate-400 h-[100px] " placeholder="Message" ></textarea>
                    <button className=" bg-[rgb(72,149,144)] w-full py-2 ">Send Us a Message</button>
                </form>
            </div>
        </div>
    )
}

export default Footer