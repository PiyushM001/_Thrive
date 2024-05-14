import React, { useState } from 'react';
import { createContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// require('dotenv').config();
// const host = process.env.port
export const  pContext = createContext();
// const port = "https://thrive-backend-o6k3.onrender.com"
const port = "http://localhost:5000"
export default function   Profilecontext(props) {
  // const localtoken2 = localStorage.getItem("token");
  // const localtoken = localtoken2.match(/"(.*?)"/)[1];

const [followbtntext , setfollowbtntext]=useState("Follow")
  const localtoken2 = localStorage.getItem("token");
let localtoken;

if (localtoken2) {
  const matchResult = localtoken2.match(/"(.*?)"/);
  if (matchResult && matchResult.length > 1) {
    localtoken = matchResult[1];
  }
}
  // const [localtoken,setlocaltoken]=useState(localStorage.getItem(""))
  // if(!localtoken === ""){
  //   const localtoken2 = localtoken.match(/"(.*?)"/)[1];
  //   console.log("localtokengdgrgergergerg",localtoken)
  //   setlocaltoken(localtoken2)
  // }
  // const host = "localhost:5000";
  const aa=[]
  const [followersarray,setfollowersarray]=useState(aa)
  const bb=[]
  const [followingarray,setfollowingarray]=useState(bb)
  const cc=[]
  const [notificationarray,setnotificationarray]=useState(cc)
  const dd=[]
  const [teamarray,setteamarray]=useState(dd)
 const info=[]
const [ infostate , setinfostate ]=useState(info);
const userinfo = [];
const infoplayer=[]
const infoplayer2=[]

const [users, setusers] = useState(userinfo);
const [playerinfo , setplayerinfo]=useState(infoplayer)
const [playerinfo2 , setplayerinfo2]=useState(infoplayer2)
const [ownid , setownid]=useState("")
const [teamname, setteamname]=useState(" ")
const [followerRealName , setfollowerRealName]=useState("")
const [followerIngameName , setfollowerIngameName]=useState("")
const [ checkfollowstate , setcheckfollowstate ]=useState("Follow");


  
let navigate = useNavigate();

 const getinfo= async ()=>{
 
  const response = await fetch(`${port}/getinfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token":localtoken
      // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDI3NjExMDllMDkwZDFiN2RiMTRhIn0sImlhdCI6MTcxMTU0ODI1N30.QvddnhBp70FoZklQktEulbxCabHz6xKhRxiEBBnZU2A"
      // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTQzYTY4YTdkZDhmNmJiM2Y2NDhmIn0sImlhdCI6MTcxMjQ3MTc4N30.Sorq9yPPBLVBw8HgIAYU7uV1ojwri6ckKAOUDihUZqw"
    },
 
  }).catch((err) => {
    toast(err);
    
  })
  const data = await response.json() 
  setinfostate(data)
  setownid(data[0]._id)
  // setownid(data[0]._id)
  localStorage.setItem("infoid", data[0]._id);

  setfollowerRealName(data[0].RealName)
setfollowerIngameName (data[0].IngameName)

}

const getteaminfo= async ()=>{
 
  const response = await fetch(`${port}/getteaminfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token":localtoken
      // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDI3NjExMDllMDkwZDFiN2RiMTRhIn0sImlhdCI6MTcxMTU0ODI1N30.QvddnhBp70FoZklQktEulbxCabHz6xKhRxiEBBnZU2A"
      // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTQzYTY4YTdkZDhmNmJiM2Y2NDhmIn0sImlhdCI6MTcxMjQ3MTc4N30.Sorq9yPPBLVBw8HgIAYU7uV1ojwri6ckKAOUDihUZqw"
    },
 
  }).catch((err) => {
    toast(err);
    
  })
  const data = await response.json() 
  // setinfostate(data)
  // setownid(data[0]._id)
  // setownid(data[0]._id)
  // localStorage.setItem("infoid", data[0]._id);

  setteamname(data[0].teamname)
  // console.log(data[0].teamname)
}

// const getplayerinfo= async (_id)=>{
 
//   const response = await fetch(`${port}/getplayerinfo", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({_id})
//   });

//   const playerdata = await response.json() 
//   setplayerinfo(playerdata)

// }



const getplayerinfo= async (_id)=>{
 
  const response = await fetch(`${port}/getplayerinfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id })

  });
  const data = await response.json() 
   setplayerinfo(data)
}


const post= async ( IngameName , RealName ,photo,description )=>{
  const response = await fetch(`${port}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token":localtoken
    },
    body: JSON.stringify({IngameName , RealName ,photo,description})
  }) .then(async (response) => {
    const x = await response.json();
   
    // const st = await response.text();
    if (response.ok) {
      console.log("sdgf",x.photo.data)
      toast.success("submission Successful");
      //  localStorage.setItem("infoid", x._id);
    //  navigate("/")
    } else {
      toast.error("sdgds");
    }
    // toast(res.json())
  })
  .catch((err) => {
    toast(err);
  });}

  // const getposts= async ( IngameName , RealName ,photo,description )=>{
  //   const response = await fetch(`${port}/post`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "token":localtoken
  //     },
  //     body: JSON.stringify({IngameName , RealName ,photo,description})
  //   }) .then(async (response) => {
  //     const x = await response.json();
     
  //     // const st = await response.text();
  //     if (response.ok) {
  //       toast.success("submission Successful");
  //       //  localStorage.setItem("infoid", x._id);
  //     //  navigate("/")
  //     } else {
  //       toast.error("sdgds");
  //     }
  //     // toast(res.json())
  //   })
  //   .catch((err) => {
  //     toast(err);
  //   });}

const createinfo= async ( IngameName , RealName , game )=>{
  const response = await fetch(`${port}/createinfo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token":localtoken
    },
    body: JSON.stringify({ IngameName , RealName , game })
  }) .then(async (response) => {
    const x = await response.json();
   
    // const st = await response.text();
    if (response.ok) {
      toast.success("submission Successful");
       localStorage.setItem("infoid", x._id);
     navigate("/")
    } else {
      toast.error("sdgds");
    }
    // toast(res.json())
  })
  .catch((err) => {
    toast(err);
  });}





  const createteam= async ( teamname )=>{
    const response = await fetch(`${port}/createteam`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "token":localtoken
      },
      body: JSON.stringify({ teamname })
    }) .then(async (response) => {
      const x = await response.json();
     
      // const st = await response.text();
      if (response.ok) {
        toast.success("submission Successful");
         localStorage.setItem("teamid", x._id);
       navigate("/team_page")
      } else {
        toast.error("sdgds");
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });}
 // console.log("ye dekh res", response)
  //   const data2 = await response.json();
  //   setinfostate(infostate.concat(data2))



  const updateinfo = async ( about,contact1,contact2,text,education , skill1, skill2, skill3, playerid, location, tournament1, tournament2, device, infoid) => {
    // API Call 
    const response = await fetch(`${port}/updateinfo`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
      body: JSON.stringify({about,contact1,contact2,text,education , skill1, skill2, skill3, playerid, location, tournament1, tournament2, device, infoid})
    }).then(async (response) => {
      const y = await response.json();
     
      // const st = await response.text();
      if (response.ok) {
        toast.success("info updated");
        navigate("/profile")
      } else {
        toast.error(response.text());
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });
   
  }


  

  const follow = async (_id,RealName,IngameName,followerRealName,followerIngameName) => {
    // API Call 
    const response = await fetch(`${port}/follow`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
      body: JSON.stringify({_id,RealName,IngameName,followerRealName,followerIngameName})
    }).then(async (response) => {
      // const st = await response.text();
      // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
      const p = await response.text();

      if (response.ok) {
getplayerinfo(_id);
checkfollow(_id)
        // toast.success(p);

      } else {
        toast.error(p);
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });
   
  }

  const checkfollow = async (_id) => {
    // API Call 
    const response = await fetch(`${port}/checkfollow`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
      body: JSON.stringify({_id})
    }).then(async (response) => {
      // const st = await response.text();
      // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
      const p = await response.text();

      if (response.ok) {
getplayerinfo(_id);
setcheckfollowstate(p)

      } else {
        toast.error(p);
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });
   
  }

  const invite = async (_userid,RealName,IngameName,followerRealName,followerIngameName,teamname) => {
    // API Call 
    const response = await fetch(`${port}/invite`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
      body: JSON.stringify({_userid,RealName,IngameName,followerRealName,followerIngameName,teamname})
    }).then(async (response) => {
      // const st = await response.text();
      // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
      const p = await response.text();

      if (response.ok) {
// getplayerinfo(_userid);
        toast.success(p);

      } else {
        toast.error(p);
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });
   
  }

  const acceptinvite = async (_userid,RealName,IngameName,followerRealName,followerIngameName) => {
    // API Call 
    const response = await fetch(`${port}/team`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
      body: JSON.stringify({_userid,RealName,IngameName,followerRealName,followerIngameName})
    }).then(async (response) => {
      // const st = await response.text();
      // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
      const p = await response.text();

      if (response.ok) {
getplayerinfo(_userid);
        toast.success(p);

      } else {
        toast.error(p);
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });
   
  }

  const ignoreinvite = async (_userid,RealName,IngameName,followerRealName,followerIngameName) => {
    // API Call 
    const response = await fetch(`${port}/ignoreinvite`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
      body: JSON.stringify({ _userid,RealName,IngameName,followerRealName,followerIngameName})
    }).then(async (response) => {
    
      const p = await response.text();

      if (response.ok) {
getplayerinfo(_userid);
        toast.success(p);

      } else {
        toast.error(p);
      }
      // toast(res.json())
    })
    .catch((err) => {
      toast(err);
      
    });
   
  }


  const getfollowerslist= async (_id)=>{
 
    const response = await fetch(`${port}/getplayerinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id })
  
    });
    const data = await response.json() 
    // console.log("upar",data);
     setfollowersarray(data.followers)
  }
  
  const getfollowinglist= async (_id)=>{
 
    const response = await fetch(`${port}/getplayerinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id })
  
    });
    const data = await response.json() 
    // console.log("upar",data);
     setfollowingarray(data.following)
  }


  const getnotification= async (_id)=>{
 
    const response = await fetch(`${port}/getnotification`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
  
    });
    const data = await response.json() 
    // console.log("notifi",data.invitinguser);
     setnotificationarray(data.invitinguser)
  }


  const getteam= async (_id)=>{
 
    const response = await fetch(`${port}/getnotification`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "token":localtoken
      },
  
    });
    const data = await response.json() 
    // console.log("notifi",data.invitinguser);
     setteamarray(data)
  }
// const createinfo= async ( text , playerid , device)=>{

//   const response = await fetch(`${port}/createinfo", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMmM5YTU3MGE0YTA1NGZmODI1ZWQzIn0sImlhdCI6MTcxMTQ1ODcyNX0.fTVwowRgkobizEMqqrKyC689psJMg-aqZgQt26UIZGI"
//     },
//     body: JSON.stringify({text , playerid , device})
//   });
//   const forminfo = await response.json()
  
  
  
//   setinfostate(infostate.concat(forminfo))
// }


const getplayers= async ()=>{
 
  const response = await fetch(`${port}/getplayers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
 
  });
  const data = await response.json() 
   setusers(data)
}

// const followerRealName = infostate[0].RealName;
//   const followerIngameName = infostate[0].IngameName;
// getfollowinglist,getfollowerslist
  return (
    
        <pContext.Provider value={ {getteaminfo,ignoreinvite,teamname,checkfollowstate,post, ownid ,checkfollow,notificationarray,teamarray,getteam,acceptinvite,createteam, getnotification,invite, playerinfo2,infostate, getinfo  , getplayerinfo ,playerinfo,createinfo,users,updateinfo,getplayers,follow ,followbtntext,followingarray,followersarray,followerRealName ,followerIngameName, getfollowinglist,getfollowerslist} }>
      {props.children}
    </pContext.Provider>
   
  )
}
