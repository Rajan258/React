'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import MyContext from '../Helper/Context'



const Header = () => {
  const users = useContext(MyContext)
  
  return (
    <>
    <div className='h-10 flex bg-black justify-between px-10 items-center text-white'>
    <div className='flex gap-5 py-3'>
        <Link href="About">Two way Binding</Link>
        
        <Link href="Blogs">Routing</Link>
        <Link href="toastify">Tostify</Link>
        <Link href="Contact">Context API</Link>
    </div>
    </div>
    </>
  )
}

export default Header