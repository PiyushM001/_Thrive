import React from 'react'
import pp from '../Images/org.png'
export default function Teamcomp(props) {
  return (
    <div className='bg-[#323232] flex justify-center items-center'>
      
      <img className='w-[20vw] h-[20vw] m-2' src={pp}></img>
      <div className='w-[74%]'> 
        <div className='text-[#ffffff] font-mochiy-pop text-[5vw]'>{props.teamname}</div>


        <div className='flex text-[#5f5f5f] text-[3vw] font-mochiy-pop'>
        <div className='mr-1'>{props.teammember1}</div>,
        <div className='mr-1'>{props.teammember2}</div>,
        <div className='mr-1'>{props.teammember3}</div>
        </div>


        </div>
    </div>
  )
}
