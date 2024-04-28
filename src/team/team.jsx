import './team.css';
import Photo from './photo.jpeg';
import Travel from './file.png';

function Team() {
  return (
    <div className="returnerTeam">
        <div className="nameLabel">
            <h1>Our Team</h1>
        </div>
        <div className="teamMembers">
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Oksana Brice</p>
                <p1>Director</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Iveta Bora</p>
                <p1>Head Accountant</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Inese Mecinska</p>
                <p1>Accountant</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Anastasija<br></br>Shaposhnikova</p>
                <p1>Accountant</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Concepcion<br></br>Vasallo</p>
                <p1>Travel Coordinator</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Christine Ritina</p>
                <p1>Travel Coordinator</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Anastasija<br></br>Vasiljeva</p>
                <p1>Travel Coordinator</p1>  
            </div>
            <div className="oneMember">
                <img src={Photo}></img>
                <p>Geoffrey Blanco</p>
                <p1>Travel Coordinator</p1>                
            </div>
        </div>
        <div className="points">
            <ul className='pts'>
                <li>Our goal is to maintain the  <span>highest standards of</span> service that we provide to our customers.</li>
                <li><span>We know the</span> complex problems they face in the maritime industry.</li>
                <li><span>Our knowledge</span>   in the maritime and shipping sectors allows you to effectively manage your trips.</li>
                <li>Our specialists can <span>quickly respond</span> to your current needs.</li>
                <li>Our staff speaks  <span>English, Latvian, Russian and Fiiipino languages.</span></li>
                <li>We are an <span>accredited agent of the International Air Transport Association (IATA)</span> from 2016.</li>
            </ul>
            <img src={Travel}></img>
        </div>
    </div>
  );
}

export default Team;