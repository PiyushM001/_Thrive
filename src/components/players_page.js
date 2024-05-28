import React, { useEffect,useState } from 'react'
import Footer from './footer'
import Header from './header'
import Player from './player'
import loadinggif from '../Images/loading.gif'

import { pContext } from "../context/profilecontext";
import { useContext } from "react";



export default function Players() {
  const a=useContext(pContext);
  const {getplayers,users}= a;

 const [loading, setLoading] = useState(false);

 
 useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      await getplayers(); // Assuming getPlayers is a function to fetch players
    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false);
    }
  };

  fetchData();

  // Since this useEffect doesn't have any dependencies, it will only run once after the initial render
}, []);
    
  return (<>

    <div className='flex flex-col h-[100vh] w-full'>
      <Header/>

      <div className='flex flex-col flex-wrap items-center overflow-y-scroll  w-full h-[100vh] bg-[#000000] text-[#ffffff]'>
      {loading && <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'><div className='h-[30vh] bg-[#000000]'></div><img className='' src={loadinggif}></img><div className='h-[30vh] bg-[#000000]'></div></div>}

<div className='w-[98vw] mt-[10vh] mb-[12vh] flex flex-wrap '>

{users.map((value) => (
                      <Player
                      key={value._id}
                       id={value._id}
                        player={value.IngameName}
                        realname={value.RealName}
                        game={value.game}
                        trophy={value.trophy}

                      />
                    ))}
       </div>
      </div>
      <Footer/>
    </div></>
  )
}






