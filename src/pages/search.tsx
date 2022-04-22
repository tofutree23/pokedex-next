import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface SearchProps {}

export default function Search({}: SearchProps) {
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
          <p className='text-xs'>
            300+ Stays - {range} - for {numberOfGuest} number of guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
  )
}
