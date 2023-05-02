
interface HomeData {
  id: number
  title: string
  description: string
}

const HomeDetails = ({ data }: {data: HomeData}) => {

    return (
      <>
        <div className="my-6">
        <details className='flex focus:outline-none p-4  justify-start w-full dark:open:bg-[#0F172A] open:bg-slate-50  space-y-4 open:shadow-lg open:backdrop-blur-md md:px-4 open:rounded-lg'>
          <summary className='items-center cursor-pointer selection:bg-none open:font-bold  flex data-center space-x-1'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 hidden md:block flex-none h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg> */}
            <h3 className='w-full underline-offset-1 hover:underline border-l-2 border-gray-500  open:underline-offset-0 open:underline dark:bg-[#0F172A] py-1 px-4 '>{data.title}</h3>
          </summary>
           
            <div className="text-sm px-4 py-6 ">
                <p>{data.description}</p>
            </div>
       </details>
        </div>
      </>
    )
  }

  export default HomeDetails