import React, { useEffect, useState } from "react";

import Followcomp from './followcomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import {  useParams } from "react-router-dom";

export default function Followers  () {

    const { _id } = useParams();
    const a=useContext(pContext);
   

     const {getfollowinglist,followingarray}= a;
    useEffect(() => {
        getfollowinglist(_id);
      
    
  }, []);
  console.log("followingarray",followingarray)
// const arr = playerinfo.following;
  return (
   <div className="bg-[#000000] m-0 w-[100%] h-[100vh] overflow-y-scroll">
{followingarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.RealName} IngameName={value.IngameName} />
                ))}
   </div>
  )
}
