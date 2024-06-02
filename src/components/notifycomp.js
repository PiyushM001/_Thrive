
import React, { useEffect } from "react";
import profile from "../Images/profileimg.png"
import accept from "../Images/tick.svg"
import reject from "../Images/reject.svg"

import { pContext } from "../context/profilecontext";
import { useContext } from "react";

export default function Notifycomp(props) {
 
    const a=useContext(pContext);
   
    

    const {acceptinvite,ignoreinvite,getinfo, getplayerinfo, playerinfo,followerIngameName,followerRealName } = a;

  
    // inviterRealName={value.followerRealName} inviterIngameName={value.followerIngameName}
const _userid=props.inviteid
const RealName=props.inviterRealName
const IngameName=props.inviterIngameName
const teamname=props.inviterteamname
useEffect(() => {
 
   getinfo()
 
}, []);


    const acceptinvitefun = () => {
         acceptinvite(_userid,RealName,IngameName,followerRealName,followerIngameName,teamname);
    };
    const ignoreinvitefun = () => {
        ignoreinvite(_userid,RealName,IngameName,followerRealName,followerIngameName);
    };
     
  return (
    <div className=" bg-gradient-to-r from-[#000000] to-[#0fafb813]  m-5 rounded-[10px]  flex items-center relative border-[1px] border-[#5b5b5b]  ">
      <div  className=" w-[5rem] h-[5rem] border-[1px]  rounded-[20%] ml-3 border-[#2e2e2e]  bg-[#0e0e0e] flex items-center "><img className=" rounded-[100%]  " src={profile}></img></div>
    {/* <h1 className="text-[re]" >  {props.id}</h1>
    <h1> {props.RealName}</h1>
    <h1> {props.IngameName}</h1> */}
   
    <div className="w-[80%]">
<div className="text-[#ffffff] font-mochiy-pop text-[3.5vw] font-thin ml-[6vw] m-1">
              {IngameName} <span className="text-[#909090] font-thin text-[3vw] m-1 "> invited you to join team</span> <span className="text-[red] text-[3vw]">{teamname}</span>
            </div>
            {/* <div className=" font-medium text-[60%] h-[30%] flex items-center text-[#656565] ml-[6vw]">
              {RealName}
            </div> */}
            <div className="flex justify-end h-[2rem] mt-3 mb-3">
              <div onClick={acceptinvitefun} className="  border-[#22ff3c] border-[1px] rounded-[5px] flex justify-center items-center text-[#ffffff] pl-2 pr-2 text-[3vw]">Accept <img className="w-[1.5rem] m-1" src={accept}></img> </div>
              <div onClick={ignoreinvitefun} className="border-[#ff0303] border-[1px] rounded-[5px] flex justify-center items-center text-[#ffffff] pl-2 pr-2 text-[3vw] ml-2 mr-2">Ignore <img className="w-[1.5rem] m-1" src={reject}></img></div>

</div>
            </div>
    </div>
  )
}
