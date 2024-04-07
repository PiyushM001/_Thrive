import React,{useState,useEffect} from 'react'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify';

import Header from './header'
import Loginas from './loginas';

export default function Home() {
  const [loginstate , setloginstate ]= useState();
  useEffect(()=>{
   const localtoken = localStorage.getItem("token");
   console.log("localtokenheader",localtoken)
   if(localtoken){
     setloginstate(true);
   }
   else(
     setloginstate(false)
   )
  },[])
  return (
    <div>
      {loginstate &&  <div className='flex flex-col h-[100vh] w-full'><ToastContainer/>
      <Header/>
      <div className='flex w-full h-[90vh] justify-center bg-black text-[#4a4a4a]'> No Posts </div>
      <Footer/>
    </div>}
    {!loginstate && <Loginas/>
    }
   
    </div>
  )
}
