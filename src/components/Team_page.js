import React, { useEffect } from 'react'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify';
import team from "../Images/org2.png";
import Followcomp from './followcomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

export default function Teampage() {
  const a=useContext(pContext);
 const { _id } = useParams();
  const {getteam,teamarray}= a;
  useEffect(() => {
    getteam(_id);
}, []);
  return (
    <div className='flex flex-col h-[100vh] w-full'><ToastContainer/>

     {/* <div className='bg-[#242424]'>
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
     </div> */}

<div className="bg-[#000000] w-[100%] h-[100vh] overflow-y-scroll">
{teamarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}
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
