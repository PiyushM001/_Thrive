import React,{useState} from 'react';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
function Skillform() {
    const [teamname, setteamname]=useState("")
   

    const a=useContext(pContext);
  const {createteam}= a;

// export const navigationfun = () => {

//     navigate("/");
// }

const localtoken = localStorage.getItem("token");

  const handleaftersignup=(e)=>{
    e.preventDefault();
   
     createteam(teamname)
  }
  return (
    <section class=" bg-[#1b1b1b] h-[100vh] flex items-center"><ToastContainer/>
  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full bg-[#2f2f2f] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="teamname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill</label>
                      <input type="teamname" name="teamname" id="teamname" value={teamname} onChange={e => setteamname(e.target.value)}  class="bg-gray-50 border border-gray-300 text-[#ffffff] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#555555]" placeholder="" required=""/>
                  </div>
                  {/* <div>
                      <label for="RealName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                      <input type="RealName" name="RealName" id="RealName" value={RealName} onChange={e => setRealName(e.target.value)} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="game" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the Game</label>
                      <input type="game" name="game" id="game" value={game} onChange={e => setgame(e.target.value)} placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div> */}
                  <div class="flex items-center justify-between">
                     
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot RealName?</a> */}
                  </div>
                  <button type="submit" onClick={handleaftersignup} class="w-full bg-[#6dff66] text-[#000000] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] border-[#000000] ">Add</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  );
}

export default Skillform;