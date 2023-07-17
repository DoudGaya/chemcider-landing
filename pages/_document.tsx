import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Science, Technology and Engineering"
          />
          <meta property="og:site_name" content="chemcider.com" />
          <meta
            property="og:description"
            content="Science, Technology and Engineering"
          />
          <meta property="og:title" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Twitter Bio Generator" />
          <meta
            name="twitter:description"
            content="Science, Technology and Engineering"
          />

          <meta
            name="keywork"
            content="science, technology, engineering, nigeria, chemical, research, education, "
          />
         
        </Head>


      <body className='bg-slate-100 dark:bg-black '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
