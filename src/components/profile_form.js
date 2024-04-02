import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Header from './header';

import Footer from './footer';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';


export default function Profileform() {
  const infoid= localStorage.getItem("infoid");
  const a=useContext(pContext);
  const {updateinfo }= a;
  const [ text,settext] = useState(" ")
  const [ device,setdevice] = useState(" ")
  const [ playerid,setplayerid] = useState(" ")
  const [ about,setabout] = useState(" ")
  const [ contact1,setcontact1] = useState(" ")
  const [ contact2,setcontact2] = useState(" ")
  const [ education,seteducation] = useState(" ")

  const [ skill2,setskill2] = useState(" ")
  const [ skill1,setskill1] = useState(" ")
  const [ location,setlocation] = useState(" ")
  const [ skill3,setskill3] = useState(" ")
  const [ tournament1,settournament1] = useState(" ")
  const [ tournament2,settournament2] = useState(" ")
  const [ kd,setkd] = useState(" ")

  const handleupdate=(e)=>{
    e.preventDefault();

     updateinfo(about,contact1,contact2,text,education , skill1, skill2, skill3, playerid, location, tournament1, tournament2, device, infoid)
  }
 
  return (

<div >
      {/* <Header/>
        <div className='flex w-full h-[90vh] justify-center bg-black text-[#4a4a4a]'> <div className='w-[90vw]'>

     <div className=''>
<div  className='m-2'>About
<textarea className='bg-[#343434] text-[#ffffff] rounded-[0.5rem] w-full h-[6rem] mt-1 ' placeholder='Write here' value={text} onChange={e => settext(e.target.value)} ></textarea>
</div>
<div className='m-2'>Device
 <input  className='bg-[#343434] text-[#ffffff] rounded-[0.5rem] w-full h-[2rem] mt-1 '  value={device} onChange={e => setdevice(e.target.value)} ></input>
 </div> 
 <div className='m-2'>Playing-ID
 <input  className='bg-[#343434] text-[#ffffff] rounded-[0.5rem] w-full h-[2rem] mt-1'  value={playerid} onChange={e => setplayerid(e.target.value)} ></input>
 </div>
 <Button className='bg-[#B4FF16] text-[#000000] rounded-[0.5rem] m-2 pl-3 pr-3 pt-2 pb-2' onClick={handleupdate} type="submit">Add</Button>
 </div>
    </div>
    
    </div>
      <Footer/> */}




<section class="bg-gray-50 dark:bg-gray-900"><ToastContainer/>
  <div class="flex flex-col  px-2 py-4 mx-auto md:h-screen lg:py-0 w-[92%]">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-5">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Fill all inputs in one go
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="about" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">About</label>
                      <textarea type="text" name="about" id="about" value={about} onChange={e => setabout(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="playerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Player-id</label>
                      <input type="text" name="playerid" id="playerid" value={playerid} onChange={e => setplayerid(e.target.value)} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="device" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Device</label>
                      <input type="text" name="device" id="device" value={device} onChange={e => setdevice(e.target.value)} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="skill1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                      <input type="text" name="skill1" id="skill1" value={skill1} onChange={e => setskill1(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="skill2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text" name="skill2" id="skill2" value={skill2} onChange={e => setskill2(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="skill3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text" name="skill3" id="skill3" value={skill3} onChange={e => setskill3(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="tournament1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tournament</label>
                      <input type="text" name="tournament1" id="tournament1" value={tournament1} onChange={e => settournament1(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="tournament2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text" name="tournament2" id="tournament2" value={tournament2} onChange={e => settournament2(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="kd" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">KD</label>
                      <input type="text" name="kd" id="kd" value={kd} onChange={e => setkd(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="contact1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                      <input type="text" name="contact1" id="contact1" value={contact1} onChange={e => setcontact1(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="contact2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <input type="text" name="contact2" id="contact2" value={contact2} onChange={e => setcontact2(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required=""/>
                  </div>
                  <div>
                      <label for="education" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                      <input type="text" name="education" id="education" value={education} onChange={e => seteducation(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone no." required=""/>
                  </div>
                  <div>
                      <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                      <input type="text" name="location" id="location" value={location} onChange={e => setlocation(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                 
                
                  
                

                  <div>
                      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">General About Game</label>
                      <textarea type="text" name="text" id="text" value={text} onChange={e => settext(e.target.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                
                
                 
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot device?</a> */}
                  </div>
                  <button type="submit" onClick={handleupdate} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] ">Submit</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
    </div>



   
  )
}
