import './about.css';
import Plane from './plane.jpeg';
import Ship from './ship.jpeg';

function About() {

    return (
        <div className='wrap__about'>
            <h1>Marine & Shipping Crew</h1>
            <div className='about_wrap'>
                <div className='info_card'>
                <div className="card_content">
                    <img src={Plane} alt="Plane" />
                    <p>We offer online booking of air tickets for Seafarers</p>
                    <p>Convenient search for best flights options <span className='highLight'>24 hours a day, 7 days a week</span>, without queues, holidays, and weekends!</p>
                    </div>
                </div>
                <div className='info_card'>
                <div className="card_content">
                    <img src={Ship} alt="Ship" />
                    <p>We offer <span className='highLight'>lowest rates for seafarers</span>, active support in all important delivery locations in the world.</p>
                    <p>Our clients are ship owners, ship management companies, and agents.</p>
                    </div>
                </div>
                <div className='info_card'>
                <div className="card_content">
                    <img src={Plane} alt="Tanker" />
                    <p>Thanks to personnel experienced in marine, business and shipping sector we can always offer prompt assistance to our customers!</p>
                    <p>We ensure <span className='highLight'>immidiate communication with any Air Company</span> to suggest a considered decision for you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
