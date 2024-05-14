import React, { useEffect,useState } from 'react'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify';
import team from "../Images/org2.png";
import Followcomp from './followcomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import loadinggif from '../Images/loading.gif'
import Header from './header';
import Teamcomp from './teamcomp';

export default function Teampage() {
  const a=useContext(pContext);
  const [showform,setshowform]= useState(false)
 const { _id } = useParams();
  const {getteam,teamarray,createteam}= a;
  const [teamname, setteamname]=useState("")

  
 const [loading, setLoading] = useState(false);

 
 useEffect( async() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      await getteam(_id);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
const handleaftersignup=(e)=>{
  e.preventDefault();

 createteam(teamname)
}

  return (
    <div className='flex flex-col h-[100vh] w-full'><ToastContainer/>
{loading && <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'><div className='h-[30vh] bg-[#000000]'></div><img className='' src={loadinggif}></img><div className='h-[30vh] bg-[#000000]'></div></div>}
<Teamcomp teamname="df" teammember1="wet" teammember2="wet" teammember3="wet"  />
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
{showform && 
<div>
  <div className="bg-[#000000] w-[100%]  overflow-y-scroll">

{teamarray[0].team.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}
   </div>

<div className='flex w-full  bg-black text-[#4a4a4a]'> 
            <div className='h-full w-[100%] bg-[#000000] flex justify-center items-center'>
        <div className='w-[95%] h-full flex items-end '>
        <input placeholder='Chat ' className='bg-[#3b3b3b] m-5 w-[90%] rounded-[10px] h-[2rem]' ></input>

        </div>
      </div>

      </div> 
</div> }


{!showform &&  <section class=" bg-[#000000]  flex items-center"><ToastContainer/>
  <div class="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-[85%]">
      
      <div class="w-full bg-[#1b1b1b] border-[#414141] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="teamname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Make Your Team</label>
                      <input type="teamname" name="teamname" id="teamname" value={teamname} onChange={e => setteamname(e.target.value)}  class="bg-gray-50 border border-gray-300 text-[#282828] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#555555]" placeholder="Team Name.." required=""/>
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
                  <button type="submit" onClick={handleaftersignup} class="w-full bg-[#b5ff1641] border-[#c0ff39] text-[#000000] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] border-[#000000] font-mochiy-pop ">Submit</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>}







      
      <Footer/>
    </div>
  )
}
