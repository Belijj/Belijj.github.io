import './how.css';
import Line from './image.jpeg'

function How() {
    return (
        <div className='container_how'>
            <div className="hoWorks">
                <h1>How it works</h1>
            </div>
            <div className="container_p1">
                <p1>We offer the simplest way for best choice:</p1>
            </div>
            <div className="linePTS">
                <div className="line"><img src={Line}></img></div>
                
            </div>

        </div>
    );
}

export default How;
