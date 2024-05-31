import React from 'react'
import './components.css'
export default function Chatcomp(props) {
  return (
    <div className='p-2 glass3 rounded-[10%]'>
      {props.msg}
    </div>
  )
}
