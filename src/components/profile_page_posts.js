import * as React from 'react';
import reject from "../Images/reject.svg"
import Followcomp from './followcomp';
import { useEffect,useState } from "react";
import nopost from '../Images/nopost.png'

import './components.css'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";




export default function Profilepagegames() {
  const { _id } = useParams();
  const a = useContext(pContext);

  const {invite, checkfollow, checkfollowstate,teamname, getteaminfo, playerinfo, getplayerinfo, follow, getinfo,followerIngameName,followerRealName,getfollowerslist,followersarray, getfollowinglist,followingarray  } = a;

  useEffect(() => {
    getplayerinfo(_id);
    checkfollow(_id);
    getinfo()
   getteaminfo()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
  const followersCount = playerinfo.followersCount;
  const followingCount = playerinfo.followingCount;
  






const [openFollowers, setOpenFollowers] = useState(false);
const [openAllies, setOpenAllies] = useState(false);
;const handleClickToOpenFollowers = () => {
  setOpenFollowers(true);
  getfollowerslist(_id);

};const handleClickToOpenAllies = () => {
  setOpenAllies(true);
  getfollowinglist(_id);
};
const handleClose = () => {

  setOpenFollowers(false)
  setOpenAllies(false);

};




  return (
    <>
      <div 
      className=" bg-[#000000] w-full h-[100vh] overflow-y-scroll ">
        <ToastContainer />


        <div>
          <div>
            <img className="w-[100vw] h-[6rem]" src={profilebg}  alt="img" ></img>
          </div>


          <div className="flex h-[4rem] relative items-center">
            <div className="absolute left-0 bottom-0">
              <img className="w-[35vw]" src={profilep} alt="img" ></img>
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
              <div  onClick={handleClickToOpenFollowers} className=" border-[1px] border-[#00fbff23] bg-[#00fbff09] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
                <div>Followers</div>
                <div>{followersCount}</div>
              </div>

              <div onClick={handleClickToOpenAllies}  className="  border-[1px] border-[#00fbff23] bg-[#00fbff09] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
                <div>Allies</div>
                <div>{followingCount}</div>
              </div>

              <div className=" w-[30%] h-[3rem] border-[1px] border-[#00fbff23] bg-[#00fbff09] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
                <div>Tournaments</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>





        <div className=" bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center">
          <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
            <Link
              className="border-r-[2px]  border-[#222222] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to={`/profile/${_id}`}
            >
              {" "}
              <div className=" w-full flex justify-center text-[#656565]   text-[3.5vw]">
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
              className=" w-full flex justify-center items-center  border-b-[2px] border-b-[#B4FF16]"
              to={`/profile/posts/${_id}`}
            >
              {" "}
              <div className="border-[#222222] w-full flex justify-center font-mochiy-pop  text-[#B4FF16] text-[3.5vw]">
                Posts
              </div>
            </Link>
          </div>
        </div>



     
   



        <div className="w-full flex flex-col justify-center items-center bg-[#000000]   ">



          
        <div className="h-[10rem] flex justify-center items-center">
<div className=" flex-col items-center h-[5rem]">
<img className="w-[4rem]" src={nopost} alt="img" ></img>
<div className="text-[1rem] text-[#7a7a7a]">No posts</div>
</div>
</div>









          <Dialog open={openFollowers} onClose={handleClose} >
                      <DialogTitle className="  w-[80vw] bg-[#020909] border-[#23757560] text-[#ebebeb] border-t-[1px]  border-l-[1px] border-r-[1px] ">
                        <div className="flex">
                          <div className="w-[90%]">Followers</div>
                          <img onClick={handleClose} className="w-[10%]" src={reject} alt="img" ></img>
                        </div>
                      </DialogTitle>


                      <DialogContent className=" bg-[#020909] border-[#23757560]  border-b-[1px]  border-l-[1px] border-r-[1px] w-[80vw] h-[60vh]  ">
                 
                        <div className="w-full ">
{followersarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}
</div>


                      </DialogContent>
                    </Dialog>
                






                    <Dialog open={openAllies} onClose={handleClose} >
                      <DialogTitle className="  w-[80vw] bg-[#020909] border-[#23757560] text-[#ebebeb] border-t-[1px]  border-l-[1px] border-r-[1px] ">
                        <div className="flex">
                          <div className="w-[90%]">Allies</div>
                          <img onClick={handleClose} className="w-[10%]" src={reject} alt="img" ></img>
                        </div>
                      </DialogTitle>


                      <DialogContent className=" bg-[#020909] border-[#23757560]  border-b-[1px]  border-l-[1px] border-r-[1px] w-[80vw] h-[60vh]  ">
                 
                        <div className="w-full ">
{followingarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.RealName} IngameName={value.IngameName} />
              ))}
</div>


                      </DialogContent>
                    </Dialog>
                





          
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
