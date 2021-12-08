import { ReactChild } from 'react'

interface LayoutProps {
  children?: ReactChild
}

export default function Layout({ children }: LayoutProps) {
  return <div className='flex h-28'>{children}</div>
}
