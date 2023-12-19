"use client"
import React, { useState } from 'react'

const About = () => {
  const [username, setusername] = useState("")
  return (
    <div>
      <h1 className='text-2xl m-9 font-bold'>Two Way Binding</h1>
      <form className='m-9'>
        <input className='text-2xl border-2 p-2 px-5'
        type='text'
        placeholder='name'
        value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        />
        
      </form>
    </div>
  )
}

export default About