import React, { useState } from 'react'
import img from '../Images/Frame 121075512.svg'
import img0 from '../Images/hl.svg'
import img2 from '../Images/Frame 121075517.svg'
import img20 from '../Images/pol.png'

import img3 from '../Images/Frame 121075519.svg'
import img30 from '../Images/pl.svg'

import img4 from '../Images/players.svg'
import img40 from '../Images/tl.svg'

import img5 from '../Images/teamicon.svg'
import img50 from '../Images/teamicon22.svg'

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Footer() {
  let location = useLocation();
  let path = location.pathname;
  
  return (
    <div className='flex w-full h-[10vh] bg-[#0e0e0e] justify-evenly '>
    
      <Link className='flex items-center ' to="/"><img className='w-[18vw] h-[4rem] ' src={path==="/"?img0:img}></img></Link>
      <Link className='flex items-center' to="/players"><img className='w-[18vw] h-[4rem]' src={path==="/players"?img40:img4}></img></Link>
      {/* <Link className='flex items-center' to="/post"><img className='w-[18vw]' src={path==="/post"?img20:img2}></img></Link> */}

      <Link className='flex items-center' to="/tournaments"><img className='w-[18vw] h-[4rem]' src={path==="/tournaments"?img30:img3}></img></Link>
      <Link className='flex items-center' to="/team"><img className='w-[18vw] h-[4rem] ' src={path==="/team"?img50:img5}></img></Link>
    </div>
  )
}
