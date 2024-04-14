import React, { useEffect, useState } from "react";

import Followcomp from './notifycomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./footer";
export default function Notificationpage  () {

    const { _id } = useParams();
    const a=useContext(pContext);
   
    

     const {notificationarray,getnotification}= a;
    useEffect(() => {
      getnotification(_id);
      
    
  }, []);


// const arr = playerinfo.following;
  return (
    <div>
 <div className="bg-[#0e0e0e] w-[100%] h-[90vh] overflow-y-scroll"><ToastContainer />

{notificationarray.map((value)=>(
                <Followcomp key={value.id} inviteid={value.id} inviterRealName={value.followerRealName} inviterIngameName={value.followerIngameName} />
                ))}

   </div>
   <Footer/>
    </div>
  
  )
}
