import React, { useEffect, useState, useContext } from 'react';
import { pContext } from "../context/profilecontext";
import loadinggif from '../Images/loading.gif';
import pp from '../Images/org.png';
import Chatcomp from './chatcomp';

const MyRealName = localStorage.getItem("MyRealName");
const infoid = localStorage.getItem("infoid");
const time = "time ye h abhi bkl dekh"; // This should probably be dynamic

export default function Chatpage() {
  const a = useContext(pContext);
  const {
    getteaminfo,
    teamarray,
    createteam,
    checkteam,
    teamnamein,
    chatfun,
    chatarray,
    getChats,
  } = a;

  const teamname = "team7";
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await getChats(teamname);
      console.log("chat array", chatarray);

    } catch (error) {
      console.error('Error fetching chats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChat = () => {
    chatfun(teamnamein, infoid, MyRealName, time, msg);
    setmsg(""); // Clear the input after sending a message
  };


  return (
    <div>
 {loading && (
        <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'>
          <div className='h-[30vh] bg-[#000000]'></div>
          <img className='' src={loadinggif} alt='Loading' />
          <div className='h-[30vh] bg-[#000000]'></div>
        </div>
      )}

{!loading && (
    <div className='flex flex-col items-center bg-[#030b0b]'>
     

      <div className='bg-[#323232] h-[10vh] w-full flex justify-center items-center glass3 mb-1'>
        <img className='w-[10vw] m-2' src={pp} alt='Profile' />
        <div className='w-[74%]'>
          <div className='text-[#ffffff] font-mochiy-pop text-[4vw]'>{teamnamein}</div>
          <div className='flex text-[#9c9c9c] text-[3.2vw] font-teachers'>
            {teamarray.map((value) => (
              <div className='mr-1' key={value.id}>{value.followerIngameName}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#030b0b] w-[96%] h-[80vh]">
        {!loading && (
          <div className='h-[70vh] w-full overflow-y-scroll text-[#c7c7c7]'>
            {chatarray.map((val) => (
<Chatcomp msg={val.message } />
))}
          </div>
        )}

        <div className=' h-[10vh] flex justify-center items-center'>
          <div className=' w-[95%] bg-[#00b3ff] h-full flex items-center pl-[1rem]'>
            <input
              placeholder='Start chatting'
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
              className='bg-[#111112]  w-[90%] rounded-[10px] h-[3rem] text-[#dadada] border-[#7a7a7a] border-[1px]'
            />
                      <button className=' p-2 pl-3 pr-3 rounded-[5px] h-[3rem] border-[#dfdfdf] border-[1px] text-[#e4e3e3] font-mochiy-pop' onClick={handleChat}>Send </button>

          </div>
        </div>
      </div>
    </div> )} </div>
  );
}
