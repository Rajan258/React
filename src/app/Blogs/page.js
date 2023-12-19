"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Blogs = () => {
  const [users, setusers]= useState([])
  const getUsers = async () =>{
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setusers(data)
  }
  
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
    <h1 className='text-2xl font-bold m-9'>  This is <br />⏩ dinamic next-js routing <br /> ⏩ API call <br /> ⏩ usEffect</h1>
    <button onClick={getUsers} className="bg-black text-white px-5 py-2 rounded m-9">Click me</button>
    <ul className='width-full bg-sky-200 rounded mx-9 p-5'>
      {users.map((e) => {
        return <li>{e.username}...<Link href={`${e.id}`}>Explore</Link></li>
      })}
    </ul>
    </>
  )
}

export default Blogs