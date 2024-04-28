import './how_works.css';

function How_works() {
    return (
        <div className='how__wrap'>
            <div className='head__how'>
                <h1>How It Works?</h1>
            </div>
            <div className='wrap__how'>
                <div className='icons'>
                <span className='how__desc'>We offer the simplest way for best choice</span>
                    <div className="icon-wrapper">
                        <div className='icon'data-number='1'></div>
                        <p>Inquiry be e-mail<br></br>Info@bmtravel.net</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className='icon'data-number='2'></div>
                        <p>Receive quotation</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className='icon'data-number='3'></div>
                        <p>Confirm quotation</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className='icon'data-number='4'></div>
                        <p>Booking confirmation E-ticket</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className='icon'data-number='5'></div>
                        <p>Enjoy your trip</p>
                    </div>
                    <div className="icon-wrapper">
                        <div className='icon'data-number='6'></div>
                        <p>Payment</p>
                    </div>
                </div>
                <div className='text__area'>
                    <p>Two locations in different parts of the world:<span className='context'>RIGA and MANILA.</span></p>
                    <p><span className='context'>So 24/7 for your service! </span>Just send a e-mail with details of your inquiry...</p>
                    <p><span className='context'>ONE CONTACT POINT and ONE PERSON in CHARGE </span>for your travel.</p>
                    <p><span className='context'>In quick reply mail you will receive all necessary contact details of PIC</span> for further cooperation.</p>
                    <p><span className='context'>ATTENTION : PAYMENT</span> after your trip.</p>
                </div>
            </div>
        </div>
    )
}

export default How_works;

