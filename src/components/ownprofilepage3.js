import React, { useEffect } from "react";
import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import editicon from "../Images/edit-icon.svg";
import posticon from "../Images/posticon.png";
import plusicon from "../Images/plusicon2.png";


import circle from "../Images/circle.png";
import team0 from "../Images/org.png";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import team from "../Images/org2.png";
import team2 from "../Images/org3.png";
import yt from '../Images/yt3.png';
import insta from '../Images/insta3.png';
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Ownprofilepage3() {
  let navigate = useNavigate();

  const a=useContext(pContext);


  const {info,getinfo,addinfo,infostate }= a;
  
  useEffect(()=>{
getinfo();
  }, [])


  const logoutfun=()=>{
    navigate("/")
    localStorage.setItem("token", "");

  }

  const handlec=()=>{
  }

  return (
    <>
    {infostate.map((value)=>(
      <div className="bg-[#000000] w-full h-[90vh] overflow-y-scroll"><ToastContainer/>
        <div>
          <div  >
            <img className="w-[100vw] h-[6rem]" src={profilebg}></img>
          </div>

          <div className="flex h-[4rem] relative items-center">
            <div className="absolute left-0 bottom-0">
              <img className="w-[35vw]" src={profilep}></img>
            </div>
            <div className="w-[40%]"></div>
            <div className="flex w-[60%] justify-end ">
            <Link className="m-2"  to='/ProfileForm'><img src={editicon}></img></Link>  

            <Link className="m-2" to='/post'><img src={posticon}></img></Link>  
              {/* <div className="flex justify-center items-center text-[#000000] bg-[#B4FF16] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[10px]">
                follow
              </div>
              <div className="flex justify-center items-center text-[#ffffff] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium rounded-[10px] text-[3vw] p-[3px]">
                message
              </div> */}
            </div>

            <div>
          

            
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <div className="text-[#ffffff] font-mochiy-pop text-[5vw] font-thin ml-[5vw]">
              {value.IngameName}
            </div>
            <div className=" font-medium text-[60%] h-[30%] flex items-center text-[#656565] ml-[5vw]">
              {value.RealName}
            </div>
          </div>

          <div className="flex h-[4rem] justify-evenly items-center">
            <div className="flex w-[94%] h-[4rem] justify-evenly items-center">
              <div className="bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Followers</div>
                <div>{value.followersCount}</div>
              </div>

              <div className="bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Following</div>
                <div>{value.followingCount}</div>
              </div>

              <div className="bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Tournaments</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#090909] h-[3rem] flex  items-center justify-center">
          <div className="bg-[#090909] w-[90%] h-[2rem] flex justify-evenly">
            <Link
              className="border-r-[2px]  border-[#222222]  shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to="/profile"
            >
              {" "}
              <div className=" w-full flex justify-center text-[#656565] text-[3.5vw]">
                {value.game}
              </div>
            </Link>

            <Link
              className="border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center"
              to="/profile/about"
            >
              {" "}
              <div className=" text-[#656565] text-[3.5vw] ">About</div>
            </Link>
            <Link
              className=" w-full flex justify-center border-b-[2px] border-b-[#B4FF16] items-center "
              to="/profile/posts"
            >
              {" "}
              <div className="border-[#222222] w-full flex justify-center text-[#B4FF16]  text-[3.5vw]">
                Posts
              </div>
            </Link>
          </div>
        </div>


 
          

          

      </div>
      ))}
      <Footer />
    </>
  );
}
