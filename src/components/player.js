import React from 'react'
import './components.css'

import profilebg from '../Images/profile_bg.png'
import profilep from '../Images/profilep.png'
import trophyp from '../Images/trophyp.svg'
import { Link } from 'react-router-dom';

export default function Player(props) {
  return (
    <>
    <Link to={`/profile/${props.id}`} className='w-[44vw] mt-4 '>
      <div className='w-[44vw] h-[12.4rem]  bg-gradient-to-b from-[#000000] to-[#0fb0b81b] rounded-[10px] border-[1px] border-[#2c2c2c] glass2'>
        <div className='relative h-[5rem]'>
        <img className='rounded-t-[10px] w-[100%] h-[3.8rem]'  src={profilebg}  alt="img" ></img>
        <div className='absolute w-[100%] h-[0rem] flex justify-center items-center'><img className='  w-[5rem]' src={profilep}></img>
</div>
</div>

<div className='w-[100%] flex flex-col justify-center items-center mt-[1rem]'>
    <div className='text-[#ffffff] font-mochiy-pop text-[3vw] font-thin ' >{props.player}</div>
    <div className=' font-medium text-[60%] h-[30%] flex items-center text-[#656565] '>{props.realname}</div>
  </div>
       

  <div className=' h-[2.3rem] flex'>
        <div className='w-[66%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className=' w-full flex justify-center'>{props.game}</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className=' w-full flex justify-center items-center'><img className='w-[30%] h-[30%] m-1' src={trophyp }></img>{props.trophy}</div></div>


      </div>

<div className='w-full flex justify-center items-center'>
<div className='flex justify-center items-center text-[#656565] border-[#B4FF16] border-[0.6px] w-[50%] h-[1.5rem] font-medium rounded-[10px] text-[3vw] p-[3px]'>Follow</div>

</div>


      </div>
    </Link></>
  )
}
