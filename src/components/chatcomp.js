import React from 'react';
import './components.css';

export default function Chatcomp(props) {
  const name = localStorage.getItem("MyRealName");
  const isMyMessage = name === props.name;

  return (
    <div className={`w-[100%] bg-[#ff000000] flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}>
      <div className='pl-4 pr-3 pt-1 pb-1 glass3 rounded-[15px] text-[#ffffff] m-2 w-fit flex-col w-[100%]'>
        <div className='flex w-full'>
          <div className={`font-thin text-[11px] w-[50%] text-[${isMyMessage ? '#c6ff0b' : '#ffffff'}]`}>{props.name}</div>
          <div className='text-[#5b5b5b] w-[3.7rem] text-[8px] flex justify-end items-end ml-2'>{props.time}</div>
        </div>
        <div className='text-[#ffffff] font-tea text-[16px]'>{props.msg}</div>
      </div>
    </div>
  );
}
