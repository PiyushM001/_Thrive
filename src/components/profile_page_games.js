import * as React from 'react';
import { useEffect,useState } from "react";

import './components.css'


import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import team0 from "../Images/org.png";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import team from "../Images/org2.png";
import team2 from "../Images/org3.png";
import yt from "../Images/yt3.png";
import insta from "../Images/insta3.png";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function Profilepagegames() {
  const { _id } = useParams();
  const a = useContext(pContext);

  const {invite, skillsarray, checkfollow, checkfollowstate,teamname, getteaminfo,infostate, playerinfo, getplayerinfo, follow, followbtntext,getinfo,followerIngameName,followerRealName } = a;

  useEffect(() => {
    // console.log("chal rha")
    getplayerinfo(_id);
    checkfollow(_id);
    
    getinfo()
   getteaminfo()
  }, []);

  const RealName = playerinfo.RealName;
  // console.log("infostate",infostate)
  // console.log("playerinfo",playerinfo)
  const IngameName = playerinfo.IngameName;
  console.log("teamname teamname",teamname)
  // const followerRealName = infostate[0].RealName;
  // const followerIngameName = infostate[0].IngameName;
  const _userid=playerinfo.user;
  const handlec = () => {
    follow(_id,RealName,IngameName,followerRealName,followerIngameName);
  };
  const handleinvite = () => {
    invite(_userid,RealName,IngameName,followerRealName,followerIngameName,teamname);
  };
  // about,contact,contact2,text,education , skill1, skill2, skill3, playerid, location, tournament1, tournament2,  infoid
  
  const game = playerinfo.game;
  const key = playerinfo.key;
  const followersCount = playerinfo.followersCount;
  const followingCount = playerinfo.followingCount;
  const tournaments = 0;
  const device = playerinfo.device;
  const text = playerinfo.text;
  

  const playerid = playerinfo.playerid;



const tournament1=playerinfo.tournament1;
const tournament2=playerinfo.tournament2;






  return (
    <>
      <div 
      className=" bg-gradient-to-r from-[#000000] to-[#111111] w-full h-[90vh] overflow-y-scroll ">
        <ToastContainer />


        <div>
          <div>
            <img className="w-[100vw] h-[6rem]" src={profilebg}></img>
          </div>


          <div className="flex h-[4rem] relative items-center">
            <div className="absolute left-0 bottom-0">
              <img className="w-[35vw]" src={profilep}></img>
            </div>
            <div className="w-[35%]"></div>
            <div className="flex w-[60%] justify-start ">

            <div className="w-[20%] border-[red] border-[2px] flex justify-center items-center rounded-[5px] ml-1 mr-8 font-mochiy-pop text-[2.5vw] text-[#ffffff] ">live</div>

              <div
                onClick={handlec}
                className="flex justify-center items-center text-[#000000] bg-[#B4FF16] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[6px]"
              >
                {checkfollowstate}
              </div>
              
              <div  onClick={handleinvite}  className="flex justify-center items-center text-[#ffffff] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium rounded-[10px] text-[3vw] p-[3px]">
              Invite
              </div>
            </div>

            <div>
              {/* <Link  to='/ProfileForm'><img src={editicon}></img></Link>   */}
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <div className="text-[#ffffff] font-mochiy-pop text-[5vw] font-thin ml-[5vw]">
              {IngameName}
            </div>
            <div className=" font-medium text-[3vw] h-[30%] flex items-center text-[#656565] ml-[5vw]">
              {RealName}
            </div>
          </div>

          <div className="flex h-[5rem] justify-evenly items-center">
            <div className="flex w-[94%] h-[4rem] justify-evenly items-center">
              <Link  to={`/followers/${_id}`} className=" border-[1px] border-[#353535] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Followers</div>
                <div>{followersCount}</div>
              </Link>

              <Link to={`/following/${_id}`}  className="  border-[1px] border-[#353535] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Allies</div>
                <div>{followingCount}</div>
              </Link>

              <div className=" w-[30%] h-[3rem] border-[1px] border-[#353535] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Tournaments</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>





        <div className=" bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center">
          <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
            <Link
              className="border-r-[2px]  border-[#222222] border-b-[2px] border-b-[#B4FF16] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to={`/profile/${_id}`}
            >
              {" "}
              <div className=" w-full flex justify-center text-[#B4FF16] text-[3.5vw]">
                {game}
              </div>
            </Link>

            <Link
              className="border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center"
              to={`/profile/about/${_id}`}
            >
              {" "}
              <div className=" text-[#656565] text-[3.5vw] ">About</div>
            </Link>
            <Link
              className=" w-full flex justify-center items-center "
              to={`/profile/posts/${_id}`}
            >
              {" "}
              <div className="border-[#222222] w-full flex justify-center text-[#656565]  text-[3.5vw]">
                Posts
              </div>
            </Link>
          </div>
        </div>



     
   



        <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a]   ">



          
        <div  className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]    ">
            <div className="text-[#00fbff] ml-7 mt-2">About</div>
            <div className="text-[#959595] mt-1 ml-7 mb-2 font-thin text-[3vw] from-inherit ">
            {text}
            </div>
          </div>
          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]     ">
            <div className="text-[#00fbff] ml-7 mt-2">Player-ID</div>
            <div className="text-[#959595]  mt-1 ml-7 mb-2 font-light text-[3.5vw] from-inherit ">
              {playerid}
            </div>
          </div>
          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1   border-[1px]  border-[#262626]     ">
            <div className="text-[#00fbff] ml-7 mt-2">Device</div>
            <div className="text-[#959595]  mt-1 ml-7 mb-2   font-light text-[3.5vw] from-inherit ">
              {device}
            </div>
          </div>

          {/* <div
            key={key}
            className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] "
          >
          
          </div> */}
          {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5 mt-2">Device</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              {device}
            </div> */}
          {/* </div> */}
          {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5 mt-2">Player-ID</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              {playerid}
            </div>
          </div> */}


















<div className="w-[100%] mt-1   bg-gradient-to-r from-[rgb(0,0,0)] to-[#0fafb813]  border-[1px]  border-[#262626]     ">
          <div className="w-full flex mt-3 ">
            <div className="text-[#00fbff] text-[1rem] ml-7   flex items-center">Skills</div>

            </div>
            {skillsarray.map((val)=>(
                <div className="text-[#c4c4c4] w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[3.5vw] from-inherit border-b-[1px] border-[#2222228e] ">
                {val.skill}
               </div>
            ))}

            {/* <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
             {value.skill1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {value.skill1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {value.skill3}
            </div> */}
          </div>




















          <div className="w-[100%] mt-2   bg-gradient-to-r from-[#000000] to-[#0fafb813]  border-[1px]  border-[#262626]    ">
            <div className="text-[#00fbff] ml-7 mt-1">Tournaments</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
             {tournament1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {tournament2}
            </div>
          </div>

          {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5 mt-2">Metrics</div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
              <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">
                {" "}
                Player ID -
              </span>{" "}
              243565545667
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
              <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">
                Gmail -
              </span>{" "}
              abc@gmail.com
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
              <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">
                Contact -
              </span>{" "}
              9352403045
            </div>
          </div> */}





          {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5 mt-2">Season 17</div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
              <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">
                {" "}
                KD -
              </span>{" "}
              5.4
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
              <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">
                Match Played -
              </span>{" "}
              567
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
              <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">
                {" "}
                Matches won -
              </span>{" "}
              108
            </div>
          </div> */}





          {/* <div className="w-[90%] mt-1 pb-2 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5  mt-2">Team</div>
            <div className="text-[#959595] m-3 mb-3 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img
                className="w-[15vw] h-[15vw] mb-[2px]  border-[2px] border-[#222222] rounded-[10px]"
                src={team}
              ></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-5 mb-2 font-medium text-[3.8vw] from-inherit">
                  Slayers
                </div>
                <div className="text-[#959595] ml-5 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div> */}
{/* 
            <div className="text-[#959595] m-3 mt-5  mb-5 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img
                className="w-[15vw] h-[15vw]  border-[2px] border-[#222222] rounded-[10px]"
                src={team2}
              ></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-5 mb-2 font-medium text-[3.8vw] from-inherit">
                  Soul
                </div>
                <div className="text-[#959595] ml-5 font-thin text-[2.5vw] from-inherit">
                  April 2021 - March 2023
                </div>
              </div>
            </div>




          </div> */}

  
  
  
  
  
  
  
          {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5 mt-2">Organisation</div>
            <div className="text-[#959595] m-3 mb-7 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img
                className="w-[15vw] h-[15vw] mb-5 border-[2px] border-[#222222] rounded-[10px]"
                src={team0}
              ></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-5 mb-2 font-medium text-[3.8vw] from-inherit">
                  URExETC
                </div>
                <div className="text-[#959595] ml-5 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-5 mt-2 flex">Social Media </div>
            <div className="flex m-5">
              <img className="w-[7vw] h-[7vw] mr-5" src={insta}></img>
              <img className="w-[8vw] h-[7vw]" src={yt}></img>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
   
  );
}
