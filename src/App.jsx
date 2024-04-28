import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Team from './team/team.jsx';
import Contacts from './contacts/contacts.jsx';
import How from './how_to_works/how.jsx';
import Links from './links/links.jsx';

import MobHeader from './mobile/m_header.jsx';
import How_works from './how_works/how_works.jsx';


function App() {
  return (
    <Router>
      <MobHeader />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/team" element={<Team/>} />

        <Route path = "/how_it_works" element={<How_works/>}/>

        <Route path = "/contacts" element={<Contacts/>}/>

        <Route path = "/links" element={<Links/>}/>


        
      </Routes>
    </Router>
  );
}

export default App;
