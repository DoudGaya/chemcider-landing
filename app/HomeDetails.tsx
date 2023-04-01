
const Details = ({ items }:any) => {
    return (
      <>
         <details className='flex justify-start w-full dark:open:bg-black open:bg-slate-50 space-y-4 open:shadow-lg open:backdrop-blur-md p-6 open:rounded-lg'>
          <summary className='cursor-pointer selection:bg-none open:font-bold open:bg-yellow-300 flex items-center space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 flex-none h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
            <h3 className=' w-full'>{items.title}</h3>
          </summary>
          <div className="">
              <p>{items.description}</p>
          </div>
       </details>
      </>
    )
  }

  export default Details