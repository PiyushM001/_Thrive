import * as React from 'react';
import reject from "../Images/reject.svg"
import Followcomp from './followcomp';
import { useEffect,useState } from "react";

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

  const {invite, checkfollow, checkfollowstate,teamname, getteaminfo, playerinfo, getplayerinfo, follow,getinfo,followerIngameName,followerRealName,getfollowerslist,followersarray, getfollowinglist,followingarray  } = a;

  useEffect(() => {
    // console.log("chal rha")
    getplayerinfo(_id);
    checkfollow(_id);
    
    getinfo()
   getteaminfo()
    // eslint-disable-line react-hooks/exhaustive-deps
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
const text=playerinfo.text;
const contact1=playerinfo.contact1;
const contact2=playerinfo.contact2;
const education=playerinfo.education;
const location=playerinfo.location;





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
            <img className="w-[100vw] h-[6rem]" src={profilebg} alt="img" ></img>
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
              className="border-r-[2px]  border-[#222222]  shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to={`/profile/${_id}`}
            >
              {" "}
              <div className=" w-full flex justify-center text-[#656565] text-[3.5vw]">
                {game}
              </div>
            </Link>

            <Link
              className="border-r-[2px]  border-r-[#222222] border-b-[2px] border-b-[#B4FF16] w-full flex justify-center items-center"
              to={`/profile/about/${_id}`}
            >
              {" "}
              <div className="  text-[#B4FF16] text-[3.5vw] font-mochiy-pop ">About</div>
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



     
   



        <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a] mb-5  ">



          
        <div  className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]    ">
            <div className="text-[#00fbff] text-[1.1rem] font-teachers ml-7 mt-2">General</div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4 mr-3 font-thin text-[4vw] from-inherit ">
            {text}
            </div>
          </div>
          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]     ">
            <div className="text-[#00fbff] text-[1.1rem] font-teachers ml-7 mt-2">Email</div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3 font-light text-[3.5vw] from-inherit ">
              {contact1}
            </div>
          </div>


          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1   border-[1px]  border-[#262626]     ">
            <div className="text-[#00fbff] ml-7 mt-2">Phone Number</div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
              {contact2}
            </div>
          </div>

          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1   border-[1px]  border-[#262626]     ">
            <div className="text-[#00fbff] ml-7 mt-2">Education</div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
              {education}
            </div>
          </div>

          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1 mb-1  border-[1px]  border-[#262626]     ">
            <div className="text-[#00fbff] ml-7 mt-2">Location</div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
              {location}
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
                





          
  
        </div>
      </div>

      <Footer />
    </>
   
  );
}
