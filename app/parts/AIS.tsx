

const AIS = ({ items,  openModal }: any) => {


    const changeModal = () => {
        return openModal()
    }

    return (
        <div className=" flex flex-col gap-y-10 md:gap-y-0 md:px-4 rounded-lg">   
           <div className=" flex flex-col md:h-[320px] md:justify-center space-y-4">
           <h2 className=' text-lg font-bold'>{items.title}</h2>
            <p className=' leading-8'>{ items.description }</p>
           </div>
           <div className=" py-4 flex w-full text-slate-100">
           <button onClick={changeModal} className='px-6 w-full md:w-1/2 py-2 bg-[rgb(14,132,100)] flex items-center space-x-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <p className=' text-lg'>Check it out </p>
            </button>
           </div>
        </div>
    )
}


export default AIS