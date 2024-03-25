import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../Images/profile.svg';
import chat from '../Images/chat-icon.svg';
import bell from '../Images/notification-icon.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex w-full h-[10vh] bg-[black] justify-evenly items-center '>
<Link className='w-[4rem] mr-[-5vw] ml-[-5vw]' to="index.html#/profile"><img className=' w-[150%] ' src={profile}></img>
</Link>

     <Form inline className='bg-[#373737] rounded-[10px] border-2 border-[#2c2c2c]  '>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search players..."
              className=" bg-[#373737] rounded-[20px] text-[red] "
            />
          </Col>
         
        </Row>
      </Form>
      <img className='w-[5vw]' src={bell}></img>

      <img  className='w-[7vw]' src={chat}></img>

    </div>
  )
}
