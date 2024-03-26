import React from "react";
import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import editicon from "../Images/edit-icon.svg";
import circle from "../Images/circle.png";
import team0 from "../Images/org.png";

import team from "../Images/org2.png";
import team2 from "../Images/org3.png";
import yt from '../Images/yt3.png';
import insta from '../Images/insta3.png';
import { Link } from "react-router-dom";

export default function Profilepagegames() {
  return (
    <>
      <div className="bg-[#000000] w-full h-[90vh] overflow-y-scroll">
        <div>
          <div>
            <img className="w-[100vw] h-[6rem]" src={profilebg}></img>
          </div>

          <div className="flex h-[4rem] relative items-center">
            <div className="absolute left-0 bottom-0">
              <img className="w-[35vw]" src={profilep}></img>
            </div>
            <div className="w-[40%]"></div>
            <div className="flex w-[50%] justify-start ">
              <div className="flex justify-center items-center text-[#000000] bg-[#B4FF16] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[10px]">
                follow
              </div>
              <div className="flex justify-center items-center text-[#ffffff] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium rounded-[10px] text-[3vw] p-[3px]">
                message
              </div>
            </div>

            <div>
              <img src={editicon}></img>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <div className="text-[#ffffff] font-mochiy-pop text-[5vw] font-thin ml-[5vw]">
              Player1234
            </div>
            <div className=" font-medium text-[60%] h-[30%] flex items-center text-[#656565] ml-[5vw]">
              Piyush Mehta
            </div>
          </div>

          <div className="flex h-[4rem] justify-evenly items-center">
            <div className="flex w-[94%] h-[4rem] justify-evenly items-center">
              <div className="bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Followers</div>
                <div>55</div>
              </div>

              <div className="bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Following</div>
                <div>67</div>
              </div>

              <div className="bg-[#121212] w-[30%] h-[2.5rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                <div>Tournaments</div>
                <div>5</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#090909] h-[3rem] flex  items-center justify-center">
          <div className="bg-[#090909] w-[90%] h-[2rem] flex justify-evenly">
            <Link
              className="border-r-[2px]  border-[#222222] border-b-[2px] border-b-[#B4FF16] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to="/profile"
            >
              {" "}
              <div className=" w-full flex justify-center text-[#B4FF16] text-[3.5vw]">
                BGMI
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
              className=" w-full flex justify-center items-center "
              to="/profile/posts"
            >
              {" "}
              <div className="border-[#222222] w-full flex justify-center text-[#656565]  text-[3.5vw]">
                Posts
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center bg-[#0c0c0c]   ">
          <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">About</div>
            <div className="text-[#959595] ml-3 mb-3 font-thin text-[3vw] from-inherit ">
            Hi, I'm Piyush, an avid BGMI player who has honed my skills during the lockdown. I possess strong teamwork abilities and adept decision-making skills. Additionally, I have participated in T1 scrims, showcasing my experience and coordination with my team
            </div>
          </div>
          <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Device</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              Iphone 13 pro
            </div>
          </div>



          <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Skills</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              IGL
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              fragger
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              Team Coordination
            </div>
          </div>

<div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Tournaments</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              BGIS Runner up 2022
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
              URX 2022 Winner
            </div>
            
          </div>


          <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Metrics</div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]"> Player ID -</span> 243565545667
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">Gmail -</span> abc@gmail.com
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">Contact -</span> 9352403045
            </div>
          </div>


          <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Season 17</div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]"> KD -</span> 5.4
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">Match Played -</span> 567
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]"> Matches won -</span> 108
            </div>
          </div>



          <div className="w-[90%] mt-1 pb-2 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3  mt-2">Team</div>
            <div className="text-[#959595] m-3 mb-3 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw] mb-[2px]  border-[2px] border-[#222222] rounded-[10px]" src={team}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  Slayers
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div>
           
            <div className="text-[#959595] m-3 mt-5  mb-5 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw]  border-[2px] border-[#222222] rounded-[10px]" src={team2}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  Soul
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  April 2021 - March 2023
                </div>
              </div>
            </div>
          </div>



<div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Organisation</div>
            <div className="text-[#959595] m-3 mb-7 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw] mb-5 border-[2px] border-[#222222] rounded-[10px]" src={team0}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  URExETC
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div>
          </div>

       
          <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2 flex">Social Media </div>
            <div className="flex m-5" >
            <img className="w-[7vw] h-[7vw] mr-5" src={insta}></img>
            <img className="w-[8vw] h-[7vw]" src={yt}></img>
            </div>
          </div>


        </div>
      </div>

      <Footer />
    </>
  );
}
