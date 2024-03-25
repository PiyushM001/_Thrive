import React from 'react'
import Footer from './footer'
import profilebg from '../Images/profile_bg.png'
import profilep from '../Images/profilep.png'
import editicon from '../Images/edit-icon.svg'
import circle from '../Images/circle.png'
import { Link } from 'react-router-dom';

export default function Profilepageposts() {
  return (
    <>
    <div className='bg-[#000000] w-full h-[90vh] overflow-y-scroll'>
      
<div>
  <div><img className='w-[100vw] h-[6rem]' src={profilebg}></img></div>


  <div className='flex h-[4rem] relative items-center'>

<div className='absolute left-0 bottom-0'><img className='w-[35vw]' src={profilep}></img></div>
<div className='w-[40%]'></div>
<div className='flex w-[50%] justify-start '>
<div className='flex justify-center items-center text-[#000000] bg-[#B4FF16] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[10px]'>follow</div>
<div className='flex justify-center items-center text-[#ffffff] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium rounded-[10px] text-[3vw] p-[3px]'>message</div>
</div>

<div><img src={editicon}></img></div>

  </div>
</div>

<div className=''>
  <div>
    <div className='text-[#ffffff] font-mochiy-pop text-[5vw] font-thin ml-[5vw]' >Player1234</div>
    <div className=' font-medium text-[60%] h-[30%] flex items-center text-[#656565] ml-[5vw]'>Piyush Mehta</div>
  </div>

<div className='flex h-[4rem] justify-evenly items-center'>
  <div className='flex w-[94%] h-[4rem] justify-evenly items-center'>
  <div className='bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]'>
    <div>Followers</div>
    <div>55</div>
  </div>

  <div className='bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]'>
    <div>Following</div>
    <div>67</div>
  </div>

  <div className='bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]'>
    <div>Tournaments</div>
    <div>5</div>
  </div></div>
</div>





</div>


<div className='bg-[#090909] h-[3rem] flex  items-center justify-center'>
  <div className='bg-[#090909] w-[90%] h-[2rem] flex justify-evenly'>
        <Link className='border-r-[2px]  border-[#222222]  w-full flex justify-center items-center' to='index.html#/profile'> <div className=' w-full flex justify-center text-[#656565] text-[3.5vw]'>BGMI</div></Link> 

    <Link className='border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center' to='index.html#/profile/about'> <div className=' text-[#656565] text-[3.5vw] '>About</div></Link>  
    <Link className=' w-full flex justify-center items-center border-b-[2px] border-b-[#B4FF16] shadow-b-inner shadow-[#B4FF16]' to='index.html#/profile/posts'>  <div className='border-[#222222] w-full flex justify-center text-[#656565]  text-[3.5vw]'>Posts</div></Link>
    </div>

      </div>

<div className='w-full h-[10rem] flex justify-center items-center '>
    <div className='text-[#5e5e5e]'>No Posts</div>
</div>





    </div>
    
    <Footer/>
    </>
  )
}
