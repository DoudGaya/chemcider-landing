
import './globals.css'
import Header from './header'
import Navigation from './parts/Navigations'
import Footer from './parts/Footer'

export const metadata = {
  title: 'Chemcider Inc',
  description: 'Nigerian Commercial Research Center and Scientific Supplies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {/* <Header /> */}
          {/* <Navigation /> */}
          {children}

          <section className=' py-10 bg-slate-900  '>
          <div className=' mx-auto md:w-full lg:w-[1400px] '>
            <Footer  />
          </div>
        </section> 
      </body>
    </html>
  )
}
