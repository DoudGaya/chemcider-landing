
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
            <h3 className='w-full underline-offset-1 hover:underline lg:border-l-2 border-gray-500  open:underline-offset-0 open:underline  py-1 px-4 '>{data.title}</h3>
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