"use client"

import Link from "next/link"
import {usePathname} from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname();

  const navItem = [
    {
      label : "Home",
      href : '/',
    },
    {
      label : "About",
      href: '/About',
    },
    {
      label : "FAQ",
      href : '/About/FAQ',
    },
    {
      label : "Posts",
      href : '/posts',
    }, 
    {
      label : "Crud",
      href : '/crud',
    }, 
  ]

  return (
    <div>
       <ul className="flex gap-5 py-10">
        {
          navItem.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className={pathname === `${link.href}` ? "text-blue-500 font-bold" : ""}>
                 {link.label} 
              </Link>
            </li>
          )) 
        }
       </ul>
    </div>
  )
}

export default Navbar