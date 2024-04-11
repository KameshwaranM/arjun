import React from 'react'
import './createmonitor.css';
import keywordMonitoring from '../../../Assets/keyword-monitoring.mp4';

const Createmonitor = () => {
  return (
    <div className='createmonitor'>
        <h2>Set up website monitoring <span className='createmonitor-in'>in seconds</span>.</h2>
        <div className='Createmonitor-loop'>
            <video src={keywordMonitoring} autoPlay loop></video>
        </div>
        <p>Be the first who knows that your website is down. Reliable monitoring warns you before any significant troubles and saves you money.</p>
        <div className="createmonitor-btn">
            <a>Start monitoring in 30 seconds</a>
        </div>
    </div>
  )
}

export default Createmonitor;