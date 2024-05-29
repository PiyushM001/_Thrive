import React, { useEffect,useState } from 'react'
import './components.css'
import team from '../Images/teamillustration.png'
import Footer from './footer'
import { ToastContainer } from 'react-toastify';
// import team from "../Images/org2.png";
import Followcomp from './followcomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import {  Link, useParams } from "react-router-dom";
import loadinggif from '../Images/loading.gif'
import Teamcomp from './teamcomp';
import Header from './header';

export default function Teampage() {
  const a=useContext(pContext);
  const [showform,setshowform]= useState(false)
 const { _id } = useParams();
  const {getteaminfo,teamarray,createteam,checkteam,teamnamein}= a;
  const [teamname, setteamname]=useState("")

  
 const [loading, setLoading] = useState(false);


const fetchData = async ()=>{
  setLoading(true);

  try{
    getteaminfo(_id)
  }
  finally{
    setLoading(false);
if(teamnamein){
    setshowform(true)
  }
  }
}

 useEffect( () => {
  
  fetchData()
}, []);// eslint-disable-line react-hooks/exhaustive-deps



console.log("teamnamein",teamarray)



const handleaftersignup=(e)=>{

 createteam(teamname)
}

  return (
    <div className='flex flex-col justify-center h-[100vh] bg-[#000000] w-full'><ToastContainer/>
{loading && <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'><div className='h-[30vh] bg-[#000000]'></div><img className='' src={loadinggif}></img><div className='h-[30vh] bg-[#000000]'></div></div>}








     
{showform && 
<div className='flex flex-col items-center'>
<Teamcomp teamname={teamnamein} teammember1="wet" teammember2="wet" teammember3="wet"  />

  <div className="bg-[#000000] w-[80%] h-[80vh]  overflow-y-scroll">

{teamarray.map((value)=>(
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




{!showform && <Header/>}





{!showform &&  <section class=" bg-[#000000] h-[100vh]  flex-col justify-center  items-center"><ToastContainer/>
  <div class="flex flex-col items-center justify-center px-2  mx-auto md:h-screen lg:py-0 w-[85%] mt-[15vh] ">
      
      <div class="w-full bg-[#1b1b1b] border-[#414141] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  glass2 ">
          <div class="p-4 ">
             
              <form class=" " action="#">
                  <div>
                      <label for="teamname" class="block mb-2 text-sm font-medium text-[#c5c5c5] font-teachers">Make Your Team</label>
                      <input type="teamname" name="teamname" id="teamname" value={teamname} onChange={e => setteamname(e.target.value)}  class="bg-gray-50 border border-gray-300 text-[#282828] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-[#555555]" placeholder="Team Name.." required=""/>
                  </div>
                 
                  <div class="flex items-center justify-between">
                     
                  </div>
                  <button type="submit" onClick={handleaftersignup} class="w-full mt-4 bg-[#b5ff1641] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-[2px] border-[#000000] font-mochiy-pop glass3 text-[#d6d6d6] ">Submit</button>
                 
              </form>
          </div>
      </div>
      <Link to="/notification" className='w-[100%] mt-5 h-[15vh] rounded-[10px] glass2 flex justify-center items-center text-[#ffffff] font-teachers '> Accept invites from Other Players</Link>
      <img src={team} className='mt-10' alt=" img"></img>

  </div>
</section>}







      
      <Footer/>
    </div>
  )
}
