import './contacts.css';
import phone from './phone2.png';
import mail from './mail2.png';
import location from './location2.png';
import bmt from './bmt.png';
import iata from './iata.jpg';

function Contacts() {
    return(
        <div className='contacts'>
            <h1>Contacts</h1>
            <div className='main_block'>
                <div className='contact'>
                    <img src={phone} alt="phone"/>
                    <p>+371 67 559 594<br />FAX: +371 67 820 091</p>
                </div>
                <div className='contact'>
                    <img src={mail} alt="mail"/>
                    <p>info@bmtravel.net</p>
                </div>
                <div className='contact'>
                    <img src={location} alt="location"/> 
                    <p>6, Pilst str.,<br />Riga LV-1050,Latvia</p>
                </div>
                <div className='pic_wrap'>
                <div className='iata'>
                    <img src={iata}></img>
                </div>
                <div className='bmt_contacts'>
                    <img src={bmt}></img>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
