import './links.css';
import norbulkImage from "./norbulk.jpeg";
import hanzaImage from './HMM1.jpeg';
import sntImage from './snt.jpeg';
import ksmImage from './ksm.jpeg';
import nspImage from './nsp.jpeg';

function Links() {
  return (
    <div className="linksReturn">
      <h1>Our Clients</h1>
      <div className="partnerContainer">
        <div className="partner">
          <img src={norbulkImage} alt="Norbulk Shipping" className='img__basic'/>
          <h2><a href='https://norbulkshipping.com/'>NORBULK SHIPPING  UK Ltd</a></h2>
          <p>Norbulk Shipping is a reputable company in the maritime industry, providing reliable ship management services to its clients.</p>
        </div>
        <div className="partner">
          <img src={hanzaImage} alt="Hanza Marine Management" className='img__uniq'/>
          <h2><a href='https://norbulkshipping.com/'>HANZA MARINE MANAGMENT</a></h2>
          <p>Hanza Marine Management is a leading provider of ship management services, known for its commitment to excellence and innovation.</p>
        </div>
        <div className="partner">
          <img src={sntImage} alt="Saint-Petersburg Maritime Company Ltd" className='img__uniq1' />
          <h2><a href='https://www.spmco.ru/'>SAINT-PETERSBURG MARITIME</a></h2>
          <p>Saint-Petersburg Maritime Company Ltd specializes in customized maritime solutions, offering tailored services to meet the unique needs of its clients.</p>
        </div>
        <div className="partner">
          <img src={ksmImage} alt="KSM COMPANY Ltd" className='img__basic'/>
          <h2><a href='https://www.ksm-world.net/team.html'> KSM COMPANY Ltd</a></h2>
          <p>KSM COMPANY Ltd is a trusted name in the maritime industry, delivering high-quality ship management services with a focus on customer satisfaction.</p>
        </div>
      </div>
    </div>
  );
}

export default Links;