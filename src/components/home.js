import React from 'react'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify';

import Header from './header'

export default function Home() {
  return (
    <div className='flex flex-col h-[100vh] w-full'><ToastContainer/>
      <Header/>
      <div className='flex w-full h-[90vh] justify-center bg-black text-[#4a4a4a]'> No Posts </div>
      <Footer/>
    </div>
  )
}
