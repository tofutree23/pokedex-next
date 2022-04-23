import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export interface SearchResult {
  img: string
  location: string
  title: string
  description: string
  star: number
  price: string
  total: string
  long: number
  lat: number
}
interface SearchProps {
  searchResult: SearchResult[]
}

export default function Search({ searchResult }: SearchProps) {
  const [range, setRange] = useState<string>('')
  const { query } = useRouter()
  const { location, startDate, endDate, numberOfGuest } = query

  useEffect(() => {
    if (!startDate || !endDate) return

    const formattedStartDate = format(
      new Date(startDate as string),
      'yyyy/MM/dd'
    )
    const formattedEndDate = format(new Date(endDate as string), 'yyyy/MM/dd')

    setRange(`${formattedStartDate} - ${formattedEndDate}`)
  }, [startDate, endDate])

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuest} guests`}
      />
      <main className='flex'>
        <section className='flex-grow pt-15 px-6'>
          <p className='text-sm text-semibold py-6'>
            300+ Stays - {range} - for {numberOfGuest} guest(s)
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in{' '}
            {(location as string).replace(/\b[a-z]/g, (word) =>
              word.toLocaleUpperCase()
            )}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResult.map((item, index) => (
              <InfoCard key={`info_card_${index}`} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context

  const searchResult = await fetch(
    `http://${req.headers.host}/api/v1/search?location=${query.location}&startDate=${query.startDate}&endDate=${query.endDate}&numberOfGuest=${query.numberOfGuest}`
  ).then((res) => res.json())

  return { props: { searchResult } }
}
