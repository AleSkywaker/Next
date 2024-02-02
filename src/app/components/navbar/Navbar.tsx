import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '@/app/components';

interface NavItems {
  path: string;
  text: string;
}

const navItems: Array<NavItems> = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue bg-opacity-30 p-4 m-2 rounded">
      <Link href='/' className='flex items-center'>
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="fex flex-1"></div>
      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />))
      }
    </nav>
  )
}