import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DesktopNav } from "@/components/DesktopNav"
import MobileNav from '@/components/MobileNav'
import { Analytics } from '@vercel/analytics/react'
import { NavProvider } from '@/components/context/NavContext'
import { SideNav } from '@/components/SideNav'
import ClickAwayListener from 'react-click-away-listener'
import { NavContext } from '@/components/context/NavContext'
import { useContext } from 'react'


export default function App({ Component, pageProps }: AppProps) { 

  const { setNav, nav }: any = useContext(NavContext)
  
  const closingModal = () => {

    if (!nav) {
      return setNav(false)
    }

  }

  return (
    <>
      {/* <Script strategy="afterInteractive" >
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-73SHRQY3GQ');
        `}
        </Script>

        <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-73SHRQY3GQ"></Script> */}
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
      <Script  async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-PLV25CDVTC"></Script>
      <DesktopNav />
      <div className="">
        <NavProvider>
              <SideNav />
            <MobileNav />
            <Component {...pageProps} />
        </NavProvider>
        </div>
      <Analytics />
    </>
    
    )
}
