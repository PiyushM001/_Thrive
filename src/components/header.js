import React, { useEffect, useState } from 'react'
import './components.css'

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../Images/profile2.svg';
import chat from '../Images/chat-icon.svg';
import bell from '../Images/notification-icon.svg';
import { Link } from 'react-router-dom';

export default function Header() {
   const [loginstate , setloginstate ]= useState();
   useEffect(()=>{
    const localtoken = localStorage.getItem("token");
    if(localtoken){
      setloginstate(true);
    }
    else(
      setloginstate(false)
    )
   },[])

  return (
    <div className='flex w-full h-[10vh] absolute top-0 bg-[#000000] justify-evenly items-center headerbg z-[100000]'>
          {loginstate && <Link className='w-[4rem] mr-[-5vw] ml-[-5vw]' to="/profile"><img className=' w-[150%] ' src={profile}></img>
</Link>}

{!loginstate && <Link to="/loginas"><div className='border-[2px] border-[#B4FF16] rounded-[10px] pl-2 pr-2 pt-1 pb-1 text-[#ffffff] text-[3vw]'> Sign up</div></Link>}

     <Form inline className='bg-[#373737] rounded-[5px] border-2 border-[#2c2c2c]  '>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search players..."
              className=" bg-[#373737] rounded-[5px] text-[#ffffff] pl-3 "
            />
          </Col>
         
        </Row>
      </Form>
     <Link to="/notification" ><img className='w-[5vw]' src={bell}></img></Link> 

      <img  className='w-[7vw]' src={chat} alt="img" ></img>

    </div>
  )
}
