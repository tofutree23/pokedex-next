import { ReactChild } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children?: ReactChild
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='navbar bg-neutral'>
        <div className='px-2 mx-2'>
          <Link href='/'>
            <a className='text-lg font-bold'>PokeDex</a>
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='items-stretch'>
            <Link href='/'>
              <a className='btn btn-ghost btn-sm rounded-btn'>Home</a>
            </Link>
            <Link href='/about'>
              <a className='btn btn-ghost btn-sm rounded-btn'>About</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-[calc(100vh-8rem)] p-7 md:p-10'>{children}</div>
      <footer className='footer items-center justify-center p-4 h-16 bg-neutral'>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
      </footer>
    </>
  )
}
