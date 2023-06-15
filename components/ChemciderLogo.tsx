import Image from "next/image"
import logo from '../public/logo/logo_white.png'
import Link from 'next/link'

export const ChemciderLogo = () => {
    return <Link href={'/'} className=" text-primary flex space-x-3 font-bold px-6 items-center ">
        <Image src={logo} alt="Chemcider Logo" className=" h-8 w-8 "></Image>
        <p>Chemcider Inc</p>
    </Link>
}