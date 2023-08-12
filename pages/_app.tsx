import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DesktopNav } from "@/components/DesktopNav"
import { useState } from 'react'
import MobileNav from '@/components/MobileNav'
import Modal from '@/parts/Modal'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
const [modal, setModal] = useState<boolean>(false);

const openModal = () => {
   return setModal(true)
}


const toggleModal = () => {
        setModal(prev => !prev)
}
 
  return (
    <>
      <Script strategy="afterInteractive" >
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-73SHRQY3GQ');
        `}
        </Script>

        <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-73SHRQY3GQ"></Script>
        <DesktopNav />
       
       
      <Script>
            {
              `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-PLV25CDVTC');
              `
            }
      </Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PLV25CDVTC"></Script>
      <div className=" ">
      <MobileNav  />
          { modal ?
          <div className=" w-full z-50 flex items-center px-6 my-auto h-full justify-center fixed">
            <Modal closeModal={toggleModal}  />
          </div>
          : '' }

      <Component {...pageProps} />
      </div>
      <Analytics />
    </>
    
    )
}
