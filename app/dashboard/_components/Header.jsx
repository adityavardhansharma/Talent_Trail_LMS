import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-lg'>
        <Link href="/" className="text-2xl font-bold text-[#06283D] py-2 inline-block">
            Talent<span className="text-[#1363DF]">Trail</span>
        </Link>
        <UserButton/>
    </div>
  )
}

export default Header