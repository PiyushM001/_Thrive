import React from 'react'
import profilebg from '../Images/profile_bg.png'
import profilep from '../Images/profilep.png'
import trophyp from '../Images/trophyp.png'
import { Link } from 'react-router-dom';

export default function Player(props) {
    const fun=()=>{
        
    }
  return (
    <>
    <Link to='/profile' className='w-[40vw] mt-4 ml-2 mr-2 '>
      <div className='w-[40vw] h-[10.4rem] bg-[#121212] rounded-[10px]'>
        <div className='relative h-[5rem]'>
        <img className='rounded-t-[10px] w-[100%] h-[3rem]'  src={profilebg}></img>
<img className='absolute left-[30%] bottom-0 w-[15vw]' src={profilep}></img>
</div>

<div className='w-[100%] flex flex-col justify-center items-center'>
    <div className='text-[#ffffff] font-mochiy-pop text-[3vw] font-thin ' >{props.Player}</div>
    <div className=' font-medium text-[60%] h-[30%] flex items-center text-[#656565] '>{props.realname}</div>
  </div>
       

  <div className=' h-[2.5rem] flex'>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className='border-r-[2px]  border-[#222222] w-full flex justify-center'>{props.game}</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className='border-r-[2px]  border-[#222222] w-full flex justify-center items-center'><img className='w-[30%] h-[30%] m-1' src={trophyp }></img>{props.trophy}</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw] '></div>


      </div>

<div className='w-full flex justify-center items-center'>
<div className='flex justify-center items-center text-[#656565] border-[#B4FF16] border-[0.6px] w-[50%] h-[1.rem] font-medium rounded-[10px] text-[3vw] p-[3px]'>Follow</div>

</div>


      </div>
    </Link></>
  )
}
