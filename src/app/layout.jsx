import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Home Page | NextJS 14 Fullstack Blog',
    template: "%s | NextJS 14 Fullstack Blog"
  },
  description: 'Home Page Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>this is the main layout</h1> */}
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}
