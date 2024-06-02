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

{!loading && (
    <div className='flex flex-col items-center w-[100vw] bg-[#000000]'>
     

      


      <div className="bg-[#000000] w-[95%]">


        
          <div className='h-[70vh] w-full overflow-y-scroll text-[#c7c7c7]'>
            {chatarray.map((val) => (
<Chatcomp msg={val.message } />
))}
          </div>
        

        <div className=' h-[10vh] bg-[#000000] flex justify-center items-center'>
          <div className=' w-[95%] bg-[#000000] h-full flex items-center pl-[1rem]'>
            <input
              placeholder='Start chatting'
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
              className='bg-[#111112] pl-2  w-[90%] rounded-[10px] h-[3rem] text-[#dadada] border-[#7a7a7a] rounded-r-[0px] border-[1px]'
            />
                      <button className=' p-2 pl-3 pr-3 rounded-[5px] h-[3rem] border-[#dfdfdf] rounded-l-[0px] border-r-[1px] border-t-[1px] border-b-[1px] text-[#a8a8a8] font-mochiy-pop' onClick={handleChat}>Send </button>

          </div>
        </div>
      </div>
    </div> )} 
    
    
    </div>
  );
}
