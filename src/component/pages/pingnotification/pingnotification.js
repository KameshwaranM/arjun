import React from 'react'
import './pingnotification.css';
import Carousel from 'react-bootstrap/Carousel';


const Pingnotification = () => {
  return (
    <div className='pingnotification'>
      <div className="pingnotification-container">
        <Carousel controls={false} interval={null}>
          <Carousel.Item>
            <div className="pingnotification-item1">
            <div className="pingnotification-slider">
              <h3>It's the most <span>simple and easy monitoring app</span> I know and it's made my daily life much easier.</h3>
              <a href="">
                <p style={{color:"#3db671"}}>@levelsio, maker of NomadList.com, RemoteOK.io and others</p>
              </a>
            </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="pingnotification-slider">
              <h3>I use UptimeRobot to <span>get push notifications whenever my website goes DOWN</span> . It's really easy and quick to set up and requires no extra changes to your website</h3>
              <a href="">
                <p style={{color:"#3db671"}}> @marckohlbrugge, maker of BetaList.com, StartUp.jobs and others</p>
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="pingnotification-slider">
              <h3>It's the most <span style={{color:"green"}}>simple and easy monitoring app</span> I know and it's made my daily life much easier.</h3>
              <a href="">
                <p style={{color:"#3db671"}}>@levelsio, maker of NomadList.com, RemoteOK.io and others</p>
              </a>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </div>
  )
}

export default Pingnotification