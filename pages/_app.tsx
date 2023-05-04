import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
 
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
  
      <Component {...pageProps} />
    </>
    
    )
}
