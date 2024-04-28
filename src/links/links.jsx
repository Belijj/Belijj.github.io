import './links.css';
import norbulkImage from "./norbulk.jpeg";
import hanzaImage from './HMM.jpeg';
import sntImage from './snt.jpeg';
import ksmImage from './ksm.jpeg';
import nspImage from './nsp.jpeg';

function Links() {
  return (
    <div className="linksReturn">
      <h1>Our Clients</h1>
      <div className="partnerContainer">
        <div className="partner">
          <img src={norbulkImage} alt="Norbulk Shipping" />
          <p><a href=''>NORBULK SHIPPING</a></p>
        </div>
        <div className="partner">
          <img src={hanzaImage} alt="Hanza Marine Management" />
          <p><a href=''>HANZA MARINE</a></p>
        </div>
        <div className="partner">
          <img src={sntImage} alt="Saint-Petersburg Maritime Company Ltd" />
          <p><a href=''>SAINT-PETERSBURG</a></p>
        </div>
        <div className="partner">
          <img src={ksmImage} alt="KSM COMPANY Ltd" />
          <p><a href=''>KSM COMPANY Ltd</a></p>
        </div>
        <div className="partner">
          <img src={nspImage} alt="NSP Company Ltd" />
          <p><a href=''>NSP Company Ltd</a></p>
        </div>
      </div>
    </div>
  );
}

export default Links;
