import React,{useState,useEffect} from 'react'
import Footer from './footer'
import { ToastContainer, toast } from 'react-toastify';
import postimg from '../Images/carry.png'
import postimg2 from '../Images/scout.png'
import postimg3 from '../Images/chutiya.png'

import Header from './header'
import Loginas from './loginas';
import Post from './post';

export default function Home() {
  const [loginstate , setloginstate ]= useState();
  useEffect(()=>{
   const localtoken = localStorage.getItem("token");
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
      <div className='flex flex-col w-full h-[100vh]  items-center bg-black text-[#4a4a4a] overflow-y-scroll'> 
      <Post name="Carryminati" realname="Ajay Nagar" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement!" postimg={postimg}  />
      <Post name="Scout" realname="tanmay singh" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement! " postimg={postimg2}  />
      <Post name="karan" realname="karan bansal" description="Co-founder" postimg={postimg3} alt="img" />
      <Post name="Carryminati" realname="Ajay Nagar" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement!" postimg={postimg}  />
      <Post name="Scout" realname="tanmay singh" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement! " postimg={postimg2}  />
      <Post name="karan" realname="karan bansal" description="Co-founder" postimg={postimg3} alt="img" />
      <Post name="Carryminati" realname="Ajay Nagar" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement!" postimg={postimg}  />
      <Post name="Scout" realname="tanmay singh" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement! " postimg={postimg2}  />
      <Post name="karan" realname="karan bansal" description="Co-founder" postimg={postimg3} alt="img" />
      <Post name="Carryminati" realname="Ajay Nagar" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement!" postimg={postimg}  />
      <Post name="Scout" realname="tanmay singh" description="Behold the electrifying poster for BGMI (Battlegrounds Mobile India), pulsating with energy and excitement! " postimg={postimg2}  />
      <Post name="karan" realname="karan bansal" description="Co-founder" postimg={postimg3} alt="img" />
       </div>
      <Footer/>
    </div>}
    {!loginstate && <Loginas/>
    }
   
    </div>
  )
}
