import './links.css';
import nrb from "./norbulk.jpeg";
import hanza from './hanza.jpeg';
import snt from './snt.jpeg';
import ksm from './ksm.jpeg';
import nsp from './nsp.jpeg';


function Links() {
  return (
    <div className="linksReturn">
        <h1>Links</h1>
        <p>Our Partners:</p>
        <ul className='partners'>
                <li>
                  <div className="one">
                      <div className="two">
                        <a href="https://norbulkshipping.com/">NORBULK SHIPPING UK Ltd</a>
                      </div>
                      <div className="two">
                        <img src={nrb}></img>
                      </div>
                  </div>
                </li>
                <li><div className="one">
                      <div className="two">
                        <a href="https://norbulkshipping.com/">HANZA MARINE MANAGEMENT</a>
                      </div>
                      <div className="two">
                        <img src={hanza}></img>
                      </div>
                  </div>
                </li>
                <li><div className="one">
                      <div className="two">
                        <a href="https://norbulkshipping.com/">SAINT-PETERSBURG MARITIME COMPANY Ltd</a>
                      </div>
                      <div className="two">
                        <img src={snt}></img>
                      </div>
                  </div></li>
                <li><div className="one">
                      <div className="two">
                        <a href="https://norbulkshipping.com/">KSM COMPANY Ltd</a>
                      </div>
                      <div className="two">
                        <img src={ksm}></img>
                      </div>
                  </div></li>
                <li><div className="one">
                      <div className="two">
                        <a href="https://norbulkshipping.com/">NORBULK PACIFIC MARITIME Inc.</a>
                      </div>
                      <div className="two">
                        <img src={nsp}></img>
                      </div>
                  </div></li>
            </ul>
    </div>
  );
}

export default Links;