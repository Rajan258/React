'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page = ({params}) => {
  const {id} = params;
  const [users, setusers]= useState([])
    const getUsers = async () =>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        setusers(data)
        
    }
    useEffect(() => {
        getUsers()
    }, [])
  return (
    <>
     <p className='p-9'>{JSON.stringify(users.username)}</p>
    </>
  )
}

export default page