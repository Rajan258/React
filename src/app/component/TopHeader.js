'use client'

import Link from 'next/link'
import React from 'react'


const TopHeader = () => {
  return (
    <>
    <div className='h-10 flex bg-blue-950 justify-between px-10 items-center text-white'>
    <div>
        <Link href="/">Logo</Link>
    </div>
    <div className='flex gap-5 p-3'>
        <Link href="/">Home</Link>
        <Link href="About">About</Link>
        <Link href="Blogs">Blogs</Link>
        <Link href="toastify">Tostify</Link>
        <Link href="Contact">Contact</Link>
    </div>
    </div>
    </>
  )
}

export default TopHeader