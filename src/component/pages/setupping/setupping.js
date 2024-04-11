import React from 'react'
import './setupping.css';
import pingsetup from '../../Assets/ping-monitoring.mp4';

const Setupping = () => {
  return (
    <div className='setupping'>
        <h2>Set up website monitoring <span className='setupping-in'>in seconds</span>.</h2>
        <div className='setupping-loop'>
            <video src={pingsetup} autoPlay loop></video>
        </div>
        <p>Be the first who knows that your website is down. Reliable monitoring warns you before any significant troubles and saves you money.</p>
        <div className="setupping-btn">
            <a>Start monitoring in 30 seconds</a>
        </div>
    </div>
  )
}

export default Setupping;