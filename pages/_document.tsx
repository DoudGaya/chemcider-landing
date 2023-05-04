import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
          
      <Head />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-73SHRQY3GQ');
      `}
      </Script>
      <Script async  strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-73SHRQY3GQ"></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
