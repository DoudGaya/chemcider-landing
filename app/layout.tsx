
import './globals.css'
import Header from './header'

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
          <Header />
          {children}
      </body>
    </html>
  )
}
