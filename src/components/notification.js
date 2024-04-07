import React, { useEffect, useState } from "react";

import Followcomp from './notifycomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function Notificationpage  () {

    const { _id } = useParams();
    const a=useContext(pContext);
   
    

     const {notificationarray,getnotification}= a;
    useEffect(() => {
      getnotification(_id);
      
    
  }, []);


// const arr = playerinfo.following;
  return (
   <div className="bg-[#000000] w-[100%] h-[100vh] overflow-y-scroll"><ToastContainer />

{notificationarray.map((value)=>(
                <Followcomp key={value.id} inviteid={value.id} inviterRealName={value.followerRealName} inviterIngameName={value.followerIngameName} />
                ))}
   </div>
  )
}
