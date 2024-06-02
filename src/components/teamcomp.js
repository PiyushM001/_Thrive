import React from 'react'
import './components.css'

import pp from '../Images/org.png'
export default function Teamcomp(props) {
  return (
    <div className='bg-[#323232] h-[10vh] w-full flex justify-center items-center  mb-1 headerbg'>
      
      <img className='w-[10vw]  m-2' src={pp}></img>
      <div className='w-[74%]'> 
        <div className='text-[#ffffff] font-mochiy-pop text-[4vw]'>{props.teamname}</div>

        <div className='flex text-[#9c9c9c] text-[3.2vw] font-teachers'>
        <div className='mr-1'>{props.teammember1}</div>,
        <div className='mr-1'>{props.teammember2}</div>,
        <div className='mr-1'>{props.teammember3}</div>
        </div>


        </div>
    </div>
  )
}
