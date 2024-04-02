import React, { useEffect } from 'react'
import Footer from './footer'
import Header from './header'
import Player from './player'

import { pContext } from "../context/profilecontext";
import { useContext } from "react";



export default function Players() {
  const a=useContext(pContext);
  const {getplayers,users}= a;
  useEffect(()=>{
    getplayers();
      }, [])
    
  return (<>

    <div className='flex flex-col h-[100vh] w-full'>
      <Header/>
      <div className='flex flex-col flex-wrap items-center overflow-y-scroll  w-full h-[90vh] bg-[#000000] text-[#ffffff]'>

<div className='w-[98vw] flex flex-wrap '>
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






