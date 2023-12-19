"use client"
import React, { useContext } from 'react'
import { MyContext } from '../Helper/Context'

const Contact = () => {
   const user = useContext(MyContext)
    
  return (
    <>
    <h1 className='text-2xl font-bold m-9'>This is for Context API</h1>
    <div className='text-2xl font-bold m-9'>{user}</div>
    </>
  )
}

export default Contact;