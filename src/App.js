import './App.css';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/home';
import Tournamentpage from './components/tournament-page';
import Profilepage from './components/profile_page';
import Profilepageposts from './components/profile_page_posts';
import Profilepagegames from './components/profile_page_games';
import Players from './components/players_page';
import Postpage from './components/profile_post_page';
import Profileform from './components/profile_form';
import Profilecontext from './context/profilecontext';
import Login_page from './components/login';
import Login from './components/login';
import Signup from './components/signup';
import Signcontext from './context/signcontext';
import Aftersignupform from './components/aftersignupform';
import Ownprofilepage from './components/ownprofilepage';
import Loginas from './components/loginas';
import Teampage from './components/makeTeam';
import Skillsform from './components/forms/skillsform';
import Ownprofilepage3 from './components/ownprofilepage3';
import Ownprofilepage2 from './components/ownprofilepage2';
import Notificationpage from './components/notification';
import Skillform from './components/Skillform';
import Maketeam from './components/makeTeam';
import Chatpage from './components/chatpage';
import ProfilePictureUpload from './components/profile_post_page';
import BgPictureUpload from './components/bg_post_page';
function App() {

 
  return (
    <div className='flex justify-center' >
       <div className=' min-[600px]:hidden max-[600px]:w-[100%] '>
     <Router >
     <Signcontext>
    <Profilecontext>
     <Routes>
    
        <Route path="/" element={ <Home/> } />
        <Route path="/tournaments" element={ <Tournamentpage/> } />
        <Route path="/profile/:_id" element={ <Profilepagegames/> } />
        <Route path="/profile/posts/:_id" element={ <Profilepageposts/> } />
        <Route path="/profile/about/:_id" element={ <Profilepage/> } />
        <Route path="/profile/about" element={ <Ownprofilepage2/> } />
        <Route path="/profile/posts" element={ <Ownprofilepage3/> } />
        <Route path="/profile" element={ <Ownprofilepage/> } />

        <Route path="/loginas" element={ <Loginas/> } />
        {/* <Route path="/profile/posts" element={ <Profilepageposts/> } />
        <Route path="/profile/about" element={ <Profilepage/> } /> */}
        <Route path="/players" element={ <Players/> } />
        <Route path="/post/Profile" element={ <ProfilePictureUpload/> } />
        <Route path="/post/bg" element={ <BgPictureUpload/> } />

        <Route path="/ProfileForm" element={ <Profileform/> } />
        <Route path="/login" element={ <Login/> } />

        <Route path="/signup" element={ <Signup/> } />
        <Route path="/aftersignupform" element={ <Aftersignupform/> } />
        <Route path="/skillsform" element={ <Skillsform/> } />
        <Route path="/notification" element={ <Notificationpage/> } />
        {/* <Route path="/post" element={ <Postpage/> } /> */}
        <Route path="/maketeam" element={ <Maketeam/> } />
        <Route path="/chatteam" element={ <Chatpage/> } />

        
        {/* <Route path="/team" element={ <Teamnameform/> } /> */}
        <Route path="/skillform" element={ <Skillform/> } />

      </Routes>
      </Profilecontext>  </Signcontext>

      </Router>
      </div>
      <div className='max-[600px]:hidden'>It is a Web App, can't be displayed in dekstop view , please adjust the screen width less than 500 px to see the website </div>
   </div>
  );
}

export default App;
