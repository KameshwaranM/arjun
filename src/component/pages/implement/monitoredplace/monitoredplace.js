import React from 'react'
import './monitoredplace.css';
import ssl from '../../../Assets/ssl-monitoring.svg'
import port from '../../../Assets/port-monitoring.svg'
import cron from '../../../Assets/cron-job-monitoring.svg'
import ping from '../../../Assets/ping-monitoring.svg'
import domain from '../../../Assets/domain-monitoring.svg'
import website from '../../../Assets/website-monitoring.svg'
import 'animate.css';

const MonitoredPlace = () => {
  return (
    <div className='monitoredPlace'>
        <div className="monitored-container animate__animated animate__fadeInUp animate__delay-1s text-light">
            <h2>All you really care about <br /><span>monitored</span> in one place.</h2>
            <div className="monitor-cards">
                <div className="card-container card1">
                    <a href="">
                        <img src={ssl} alt="" />
                        <h3>SSL monitoring</h3>
                        <span>Learn more</span>
                    </a>
                </div>
                <div className="card-container-card2">
                    <a href="">
                        <img src={port} alt="" />
                        <h3>Port monitoring</h3>
                        <span>Learn more</span>
                    </a>
                </div>
                <div className="card-container card3">
                    <a href="">
                        <img src={cron} alt="" />
                        <h3>Cron job monitoring</h3>
                        <span>Learn more</span>
                    </a>
                </div>
                <div className="card-container card5">
                    <a href="">
                        <img src={ping} alt="" />
                        <h3>Ping monitoring</h3>
                        <span>Learn more</span>
                    </a>
                </div>
                <div className="card-container-card6">
                    <a href="">
                        <img src={domain} alt="" />
                        <h3>Domain expiration monitoring</h3>
                        <span>Learn more</span>
                    </a>
                </div>
                <div className="card-container card7">
                    <a href="">
                        <img src={website} alt="" />
                        <h3>Website monitoring</h3>
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MonitoredPlace;