import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/home';
import Tournamentpage from './components/tournament-page';
import Profilepage from './components/profile_page';
import Profilepageposts from './components/profile_page_posts';
import Profilepagegames from './components/profile_page_games';
import Players from './components/players_page';
import Postpage from './components/post_page';
function App() {
  return (
    <>
     <Router >
     
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/tournaments" element={ <Tournamentpage/> } />
        <Route path="/profile" element={ <Profilepagegames/> } />
        <Route path="/profile/posts" element={ <Profilepageposts/> } />
        <Route path="/profile/about" element={ <Profilepage/> } />
        <Route path="/players" element={ <Players/> } />
        <Route path="/post" element={ <Postpage/> } />
        {/* <Route path="/post" element={ <Postpage/> } /> */}

      </Routes></Router>
   </>
  );
}

export default App;
