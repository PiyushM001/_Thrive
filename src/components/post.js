import React from 'react'
import profile from '../Images/profile.svg'
// import postimg from '../Images/profile_bg.png'
import likeicon from '../Images/like.svg'
import commenticon from '../Images/comment.svg'

export default function Post(props) {
  return (
    <div className='mt-3 '>
      <div className=' bg-[#000000] w-[100vw] '>




        <div className='flex'>
            <img className='w-[3rem]' src={profile}  alt="img" ></img>
            <div className='flex flex-col justify-center '>
                <div className='text-[#ffffff] font-mochiy-pop text-[2.8vw] font-thin '>{props.name}</div>
                <div className='font-medium text-[2vw] h-[30%] flex items-center text-[#656565]'>{props.realname}</div>
            </div>
            </div>




            <div className='text-[#959595] ml-3 mb-2 mt-2 font-thin text-[2.8vw] font-sans  '>
                {props.description}
            </div>
       
       

<img className='w-full' src={props.postimg}  alt="img" ></img>





<div className='w-[100%] h-[2.5rem]  flex items-center'>

    <div className='w-[30%] flex justify-evenly'>
    <div className='text-[2.5vw]'>    <img  src={likeicon}  alt="img" ></img> Like</div>
    <div className='text-[2.5vw] flex  flex-col justify-center items-center'>    <img className='w-[0.8rem]' src={commenticon}></img>Comment  </div>
    </div>

<div className='w-[70%] flex justify-end h-[60%]'>
    <div className='w-[60%] flex justify-evenly'>
<div className='text-[3vw]'>12 Likes</div>
<div className='text-[3vw]' > 2 Comments</div>
</div>
</div>



</div>




      </div>
    </div>
  )
}
