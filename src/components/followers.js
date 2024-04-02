import React, { useEffect, useState } from "react";

import Followcomp from './followcomp';
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

export default function Followers  () {

    const { _id } = useParams();
    const a=useContext(pContext);
   

     const {getfollowerslist,followersarray}= a;
    useEffect(() => {
      getfollowerslist(_id);
      
    
  }, []);
// const arr = playerinfo.following;
  return (
   <div className="bg-[#000000] w-[100%] h-[100vh] overflow-y-scroll">
{followersarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}
   </div>
  )
}
