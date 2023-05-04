import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-slate-100 dark:bg-black '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
