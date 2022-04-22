import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

interface HeaderProps {
  placeholder?: string
}

export default function Header({ placeholder }: HeaderProps) {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [numberOfGuest, setNumberOfGuest] = useState<number>(1)
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchInput(value)
  }

  const handleDateSelect = (rangesByKey: RangeKeyDict) => {
    setStartDate(rangesByKey.selection.startDate || new Date())
    setEndDate(rangesByKey.selection.endDate || new Date())
  }

  const handleChangeNumberOfGuest = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (value > 0) setNumberOfGuest(value)
  }

  const resetInput = () => setSearchInput('')

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest,
      },
    })
    resetInput()
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left section */}
      <div
        className='relative flex items-center h-10 cursor-pointer my-auto'
        onClick={() => router.push('/')}
      >
        <Image
          src='/image/Airbnb_Logo.png'
          alt='logo'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle section */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder || 'Start your search'}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <SearchIcon className='rounded-full h-8 bg-red-400 text-white p-2 cursor-pointer hidden md:inline-flex md:mx-2' />
      </div>
      {/* Right section */}
      <div className='flex items-center justify-end space-x-4 text-gray-400'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      {/* Show Date range */}
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleDateSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-400'
              value={numberOfGuest}
              onChange={handleChangeNumberOfGuest}
            />
          </div>
          <div className='flex'>
            <button
              className='uppercase flex-grow text-gray-500'
              onClick={resetInput}
            >
              cancel
            </button>
            <button
              className='uppercase flex-grow text-red-400'
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
