import './team.css';
import Photo from './photo.jpeg';
import Travel from './travel.jpeg';

function Team() {
  return (
    <div className="returnerTeam">
      <div className="nameLabel">
        <h1>Our Team</h1>
      </div>
      <div className="teamMembers">
        <div className="oneMember">
          <p1>Director</p1>
          <img src={Photo} alt="Oksana Brice" />
          <p>Oksana Brice</p>
        </div>
        <div className="oneMember">
          <p1>Head Accountant</p1>
          <img src={Photo} alt="Iveta Bora" />
          <p>Iveta Bora</p>
        </div>
        <div className="oneMember">
          <p1>Accountant</p1>
          <img src={Photo} alt="Inese Mecinska" />
          <p>Inese Mecinska</p>
        </div>
        <div className="oneMember">
          <p1>Accountant</p1>
          <img src={Photo} alt="Anastasija Shaposhnikova" />
          <p>Anastasija<br />Shaposhnikova</p>
        </div>
        <div className="oneMember">
          <p1>Travel Coordinator</p1>
          <img src={Photo} alt="Concepcion Vasallo" />
          <p>Concepcion Vasallo</p>
        </div>
        <div className="oneMember">
          <p1>Travel Coordinator</p1>
          <img src={Photo} alt="Christine Ritina" />
          <p>Christine Ritina</p>
        </div>
        <div className="oneMember">
          <p1>Travel Coordinator</p1>
          
          <img src={Photo} alt="Anastasija Vasiljeva" />
          <p>Anastasija<br />Vasiljeva</p>
        </div>
        <div className="oneMember">
          <p1>Travel Coordinator</p1>
          <img src={Photo} alt="Geoffrey Blanco" />
          <p>Geoffrey Blanco</p>
        </div>
      </div>
      <div className="points">
        <ul className='pts'>
          <li>Our goal is to maintain the <span>highest standards of</span> service that we provide to our customers.</li>
          <li><span>We know the</span> complex problems they face in the maritime industry.</li>
          <li><span>Our knowledge</span> in the maritime and shipping sectors allows you to effectively manage your trips.</li>
          <li>Our specialists can <span>quickly respond</span> to your current needs.</li>
          <li>Our staff speaks <span>English, Latvian, Russian and Fiiipino languages.</span></li>
          <li>We are an <span>accredited agent of the International Air Transport Association (IATA)</span> from 2016.</li>
        </ul>
        <img src={Travel} alt="Travel" />
      </div>
    </div>
  );
}

export default Team;
