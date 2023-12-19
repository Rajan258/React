'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const notify = ()=> {
       toast("Login successfull")
    }
  return (
    <>
    <button onClick={notify} className=' bg-black text-white m-9 py-2 px-5'>Click me</button>
    <ToastContainer />
    </>
  )
}

export default Toastify