import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Team from './team/team.jsx';
import Contacts from './contacts/contacts.jsx';
import MobHeader from './mobile/m_header.jsx';

function App() {
  return (
    <Router>
      <MobHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
