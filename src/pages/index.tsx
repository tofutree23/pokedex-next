import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

export default function App() {
  return (
    <div
    // className='flex flex-col items-center justify-center min-h-screen py-2'
    >
      <Head>
        <title>Reveal BNB</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </div>
  )
}
