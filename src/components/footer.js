import React, { useState } from 'react'
import img from '../Images/Frame 121075512.svg'
import img2 from '../Images/Frame 121075517.svg'
import img3 from '../Images/Frame 121075519.svg'
import img4 from '../Images/players.svg'
import { Link } from 'react-router-dom';
export default function Footer() {
  
  return (
    <div className='flex w-full h-[10vh] bg-[black] justify-evenly '>
    
      <Link className='flex items-center' to="index.html#/"><img className='w-[18vw]' src={img}></img></Link>

      <Link className='flex items-center' to="index.html#/post"><img className='w-[18vw]' src={img2}></img></Link>

      <Link className='flex items-center' to="index.html#/tournaments"><img className='w-[18vw]' src={img3}></img></Link>
      <Link className='flex items-center' to="index.html#/players"><img className='w-[18vw]' src={img4}></img></Link>


    </div>
  )
}
