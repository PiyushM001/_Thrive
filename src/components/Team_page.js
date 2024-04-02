import React from 'react'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify';
import team from "../Images/org2.png";

import Header from './header'

export default function Teampage() {
  return (
    <div className='flex flex-col h-[100vh] w-full'><ToastContainer/>

     <div className='bg-[#242424]'>
     <div className="text-[#959595] m-3 mb-3 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw] mb-[2px]  border-[2px] border-[#222222] rounded-[10px]" src={team}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  Slayers
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div>
     </div>


      <div className='flex w-full h-[90vh] bg-black text-[#4a4a4a]'> 
      
      {/* <div className='h-full w-[20%] bg-[#252525]'>kjh</div> */}
      <div className='h-full w-[100%] bg-[#000000] flex justify-center items-center'>
        <div className='w-[95%] h-full flex items-end '>
        <input placeholder='Chat ' className='bg-[#3b3b3b] m-5 w-[90%] rounded-[10px] h-[2rem]' ></input>

        </div>
      </div>

      </div>
      <Footer/>
    </div>
  )
}
