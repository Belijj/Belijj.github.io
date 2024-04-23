import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Team from './team/team.jsx';
import Contacts from './contacts/contacts.jsx';
import How from './how_to_works/how.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/team" element={<Team/>} />

        <Route path = "/how" element={<How/>}/>

        <Route path = "/contacts" element={<Contacts/>}/>

        <Route path = "/links" element={<Contacts/>}/>

      </Routes>
    </Router>
  );
}

export default App;