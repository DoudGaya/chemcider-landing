import { CiInstagram }from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'
import { CiFacebook } from 'react-icons/ci'
import { CiYoutube } from 'react-icons/ci'
import { BsEmojiFrown } from 'react-icons/bs'
import ClickAwayListener from 'react-click-away-listener';


interface ModalFunc {
    closeModal: () => void
}

const Modal = ({ closeModal }: ModalFunc) => {

    return (
        <>
        <ClickAwayListener onClickAway={ closeModal } >
            <div className=" w-full text-slate-900 md:w-2/5 h-screen bg-purple-400 relative justify-between border border-[rgb(72,149,144)] drop-shadow-lg backdrop-blur-sm dark:bg-gradient-to-b dark:text-white dark:to-[#000A16] dark:from-[#021226]  text z-50 bg-gradient-to-br from-slate-200 to-white rounded-2xl my-auto mx-auto flex flex-col ">
                <div className=" flex flex-col my-6 items-center w-full py-10 px-10">
                    <BsEmojiFrown size={'3rem'} />
                    <p className=" text-2xl">Sorry, We are still working on this app</p>
                   <div className=" py-2 flex space-y-4 flex-col w-full items-center">
                       <div className=" w-full flex items-center flex-col space-y-4 my-6">
                       <p>Join our Wait list and/or follow us on social media</p>
                        <div className=" flex flex-col md:flex-row space-y-4 md:space-y-0 w-full ">
                        <input type="text" className=" dark:bg-slate-900 dark:border-slate-800 py-2 px-3 outline-none  border w-full " />
                        <button className="py-2 px-8 bg-[rgb(72,149,144)]">Join</button>
                        </div>
                       </div>
                    </div>
                 
                    <div className=" grid gap-x-6 grid-cols-4 ">
                        <a href="#" className=' bg-slate-700/50 flex items-center hover:bg-slate-500 justify-center  shadow-xl py-1 px-4 rounded-lg'>
                            <CiInstagram className='' size={'2rem'} />
                        </a>

                        <a href="#" className=' bg-slate-700/50 flex items-center hover:bg-slate-500 justify-center shadow-xl py-1 px-4 rounded-lg'>
                            <CiTwitter className='' size={'2rem'} />
                        </a>

                        <a href="#" className=' bg-slate-700/50 flex items-center hover:bg-slate-500 justify-center shadow-xl py-1 px-4 rounded-lg'>
                            <CiFacebook className='' size={'2rem'} />
                        </a>

                        <a href="#" className=' bg-slate-700/50 flex items-center hover:bg-slate-500 justify-center shadow-xl py-1 px-4 rounded-lg'>
                            <CiYoutube className='' size={'2rem'} />
                        </a>
                    </div>
                </div>

                

                <div className=" w-full items-center justify-center flex my-20">
                    <button onClick={closeModal} className=" px-8 rounded-sm py-2 text-black font-semibold text-lg bg-[rgb(17,214,197)]">Close </button>
                </div>
            </div>

        </ClickAwayListener>
        </>
    )
}


export default Modal