import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Team from './team/team.jsx';
import Contacts from './contacts/contacts.jsx';
<<<<<<< HEAD
import How from './how_to_works/how.jsx';
import Links from './links/links.jsx';
=======
import MobHeader from './mobile/m_header.jsx';
>>>>>>> 0ff66c6c4fcf131e038dd5b856bd24789c7f16cf

function App() {
  return (
    <Router>
      <MobHeader />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/team" element={<Team/>} />

        <Route path = "/how" element={<How/>}/>

        <Route path = "/contacts" element={<Contacts/>}/>

        <Route path = "/links" element={<Links/>}/>

=======
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
>>>>>>> 0ff66c6c4fcf131e038dd5b856bd24789c7f16cf
      </Routes>
    </Router>
  );
}

export default App;
