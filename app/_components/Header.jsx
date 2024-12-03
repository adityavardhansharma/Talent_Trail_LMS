import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-xl'>
      <Link href="/" className="text-2xl font-bold text-[#06283D] py-2 inline-block">
        Talent<span className="text-[#1363DF]">Trail</span>
      </Link>
        <Link href={'/dashboard'}>
          <Button className='bg-gradient-to-tl from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600'>Login</Button>
        </Link>
    </div>
  )
}

export default Header