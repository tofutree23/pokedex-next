import { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard, { SmallCardProps } from '@/components/SmallCard'
import MediumCard, { MediumCardProps } from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

interface AppPrpos {
  exploreData: SmallCardProps[]
  cardData: MediumCardProps[]
}

export default function App({ exploreData, cardData }: AppPrpos) {
  return (
    <div>
      <Head>
        <title>Reveal BNB</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      {/* Cards... */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
          {/* Pull data from server (SSR) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, location, distance }, index) => (
              <SmallCard
                key={`${location}-${index}`}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardData?.map(({ img, title }, index) => (
              <MediumCard key={`${title}_${index}`} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://images.unsplash.com/photo-1485216983937-749292830fcf'
          description='Wishlists created by Revealbnb'
          title='The Greatest Outdoor'
          buttonText='Get inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { result: exploreData } = await fetch(
    'http://localhost:3000/api/v1/explorer'
  ).then((res) => res.json())

  const { result: cardData } = await fetch(
    'http://localhost:3000/api/v1/card'
  ).then((res) => res.json())

  return {
    props: {
      exploreData,
      cardData,
    },
  }
}
