import Layout from '@/components/Layout'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['400', '600', '900'] })

export default function App({ Component, pageProps }) {
  return (
  <main className={poppins.className}>
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  </main>
  )
}
