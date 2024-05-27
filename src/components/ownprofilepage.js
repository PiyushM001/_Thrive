import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import editicon from "../Images/edit-icon.svg";
import settings from "../Images/Settings.svg";
import cross from "../Images/cross.svg";

import posticon from "../Images/posticon.svg";
import plusicon from "../Images/plusicon2.png";

import circle from "../Images/circle.png";
import team0 from "../Images/org.png";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import team from "../Images/org2.png";
import team2 from "../Images/org3.png";
import yt from "../Images/yt3.png";
import insta from "../Images/insta3.png";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Ownprofilepage() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const a = useContext(pContext);
  const infoid = localStorage.getItem("infoid");

  const { info, ownid, getinfo, addinfo, infostate, updateinfo } = a;
  const _id = ownid;
  useEffect(() => {
    getinfo();
  }, []);

  const logoutfun = () => {
    navigate("/");
    localStorage.setItem("token", "");
  };

  const [addedskill, setaddedskill] = useState(" ");

  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleSubmitskills = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      " ",
      addedskill,
      " ",
      " ",
      " ",
      " ",
      " ",
      infoid
    );
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const handlec=()=>{
  // }

  return (
    <>
      {infostate.map((value) => (
        <div className="bg-gradient-to-r from-[#000000] to-[#111111] w-full h-[90vh] overflow-y-scroll">
          <ToastContainer />
          <Transition
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-50"></div>
          </Transition>

          {/* Sliding menu */}
          <Transition
            show={isOpen}
            enter="transform transition duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-y-0 right-0 flex flex-col w-64 shadow-xl bg-[#0c0c0c]  z-[2]">
              {/* Your menu content here */}
              <div className="w-[100%] flex justify-end ">
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[1.7rem] m-3"
                  src={cross}
                ></img>
              </div>
              <div className="w-[100%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
                <div className="h-[5rem] w-[100%] flex justify-center  items-center">
                  <button
                    onClick={logoutfun}
                    className="  text-[#828282] text-[5vw]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </Transition>
          <div>
            <div>
              <img className="w-[100vw] h-[6rem]" src={profilebg}></img>
            </div>

            <div className="flex h-[4rem] relative items-center">
              <div className="absolute left-0 bottom-0">
                <img className="w-[35vw]" src={profilep}></img>
              </div>
              <div className="w-[40%]"></div>
              <div className="flex w-[60%] justify-end ">
                <Link className="m-2" to="/ProfileForm">
                  <img src={editicon}></img>
                </Link>

                <Link
                  className="  flex justify-center items-center "
                  to="/post"
                >
                  <img className="w-[1.2rem]" src={posticon}></img>
                </Link>
                <div className=" mr-[0.6rem] ml-[0.6rem] flex justify-center items-center ">
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-[1.2rem]"
                    src={settings}
                  ></img>
                </div>

                {/* <div className="flex justify-center items-center text-[#000000] bg-[#B4FF16] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[10px]">
                follow
              </div>
              <div className="flex justify-center items-center text-[#ffffff] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium rounded-[10px] text-[3vw] p-[3px]">
                message
              </div> */}
              </div>

              <div></div>
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

            <div className="flex  h-[5rem] justify-evenly items-center ">
              <div className="flex w-[94%] h-[4rem] justify-evenly items-center">
                <Link
                  to={`/followers/${_id}`}
                  className=" border-[1px] border-[#353535]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]"
                >
                  <div>Followers</div>
                  <div>{value.followersCount}</div>
                </Link>

                <Link
                  to={`/following/${_id}`}
                  className=" border-[1px] border-[#353535]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]"
                >
                  <div>Allies</div>
                  <div>{value.followingCount}</div>
                </Link>

                <div className=" border-[1px] border-[#353535]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw]">
                  <div>Tournaments</div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center ">
            <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
              <Link
                className="border-r-[2px]  border-[#222222] border-b-[2px] border-b-[#B4FF16] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
                to="/profile"
              >
                {" "}
                <div className=" w-full flex justify-center text-[#B4FF16] text-[3.5vw]">
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








          <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a00]   ">












            
            <div
              key={value.key}
              className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] "
            >

              <div className="flex h-[4rem]">
                <div className="text-[#00fbff] text-[1rem] ml-7 mt-2 w-[20%] flex items-center">
                  About
                </div>

                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[3rem] mr-4"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpen}
                    >
                      +
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Skill"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Example: Assaulter,Team work,IGL etc...
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="addedskill"
                          id="addedskill"
                          value={addedskill}
                          onChange={(e) => setaddedskill(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] "
                          onClick={handleSubmitskills}
                          color="red"
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="text-[#959595] ml-3 ml-7  font-thin text-[3vw] from-inherit ">
                {value.text}
              </div>
            </div>














            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[20%] text-[#00fbff] text-[1rem] ml-7 mt-2 flex  items-center">
                  Device
                </div>
                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[3rem] mr-4"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpen}
                    >
                      +
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Skill"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Example: Assaulter,Team work,IGL etc...
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="addedskill"
                          id="addedskill"
                          value={addedskill}
                          onChange={(e) => setaddedskill(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitskills}
                          color="red"
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="text-[#959595] m-3 ml-7 font-light text-[3.5vw] from-inherit ">
                {value.device}
              </div>
            </div>

















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[20%] text-[#00fbff] text-[1rem] ml-7 mt-2 flex items-center">
                  Player-Id
                </div>
                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[2rem] text-[red]"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpen}
                    >
                      +
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Skill"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Example: Assaulter,Team work,IGL etc...
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="addedskill"
                          id="addedskill"
                          value={addedskill}
                          onChange={(e) => setaddedskill(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitskills}
                          color="red"
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="text-[#959595] m-3 ml-7 font-light text-[3.5vw] from-inherit ">
                {value.playerid}
              </div>
            </div>

            {/* 


          <div className=' flex justify-center'>
          
          <Button variant="outlined" color="primary"
              onClick={handleClickToOpen}>
              + 
          </Button>
          <Dialog open={open} onClose={handleSubmitskills} >
              <DialogTitle className='text-[red] font-mochiy-pop'>{"Add your Skill"}</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      Example: Assaulter,Team work,IGL etc...
                  </DialogContentText>
                  <TextField
          autoFocus
          required
          type="text" name="addedskill" id="addedskill" value={addedskill} onChange={e => setaddedskill(e.target.value)}
          margin="dense"
          label=""
          fullWidth
          variant="standard"
        />
              </DialogContent>
              <DialogActions className='bg-[#aeff00]'>
                  <Button className='w-[100%] bg-[#91ff00]' onClick={handleSubmitskills}
                      color="red" autoFocus>
                      Save
                  </Button>
              </DialogActions>
          </Dialog>
      </div>


        */}
























            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="w-full flex  h-[4rem]">
                <div className="text-[#00fbff] text-[1rem] ml-7  w-[80%] flex items-center">
                  Skills
                </div>

                <div className=" flex items-center mr-4">
                  <Button
                    className="w-[3rem] mr-4"
                    variant="outlined"
                    color="primary"
                    onClick={handleClickToOpen}
                  >
                    +
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className=" font-mochiy-pop text-[2vw]">
                      {"Add your Skill"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Example: Assaulter,Team work,IGL etc...
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        type="text"
                        name="addedskill"
                        id="addedskill"
                        value={addedskill}
                        onChange={(e) => setaddedskill(e.target.value)}
                        margin="dense"
                        label=""
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions className="bg-[#aeff00]">
                      <Button
                        className="w-[100%] bg-[#91ff00]"
                        onClick={handleSubmitskills}
                        color="red"
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              {value.skill2.map((val) => (
                <div className="text-[#c4c4c4] font-teachers w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e]">
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





















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="w-full flex h-[4rem]">
                <div className="text-[#00fbff] text-[1rem] ml-7  w-[80%] flex items-center">
                  Tournaments
                </div>

                <div className=" flex items-center mr-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClickToOpen}
                  >
                    +
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle >
                      {"Add your Skill"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Example: Assaulter,Team work,IGL etc...
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        type="text"
                        name="addedskill"
                        id="addedskill"
                        value={addedskill}
                        onChange={(e) => setaddedskill(e.target.value)}
                        margin="dense"
                        label=""
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions className="bg-[#aeff00]">
                      <Button
                        className="w-[100%] "
                        onClick={handleSubmitskills}
                        
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              {value.skill2.map((val) => (
                <div className="text-[#c4c4c4] font-teachers w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e]">
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

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Tournaments</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
{value.tournament1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {value.tournament2}
            </div>
            
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
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
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
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
          </div> */}

            {/* 
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
            </div> */}

            {/* <div className="text-[#959595] m-3 mt-5  mb-5 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
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
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
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
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2 flex">Social Media </div>
            <div className="flex m-5" >
            <img className="w-[7vw] h-[7vw] mr-5" src={insta}></img>
            <img className="w-[8vw] h-[7vw]" src={yt}></img>
            </div>
          </div>
           */}
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}
