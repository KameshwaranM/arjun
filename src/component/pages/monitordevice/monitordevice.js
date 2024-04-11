import React from "react";
import "./monitordevice.css";
import 'animate.css';
import device from "../../Assets/devices-on-network.svg";

const Moniterdevice = () => {
    return (
        <div>
            <div className="monitordevice">
              <div className="monitordevice-All">
                    <div className="monitordevice-Content">
                        <h2 className="monitordevice-Heading">
                            <span className="monitordevice-span">Monitor</span>
                            <span className="monitordevice-or"> device</span><span className="monitordevice-absence"> in</span><br /> <span className="monitordevice-network">your network</span>  <span className="monitordevice-Dot">.</span>
                        </h2>
                        <p className="monitordevice-Paragraph">
                        Make sure all the key devices in your <br />
                        network are up with our simple and <br />  
                        reliable monitoring.<br />
                        </p>
                        <div className="monitordevice-Right">
                    <img className="monitordevice-presence animate__animated animate__fadeInUp animate__delay-1s text-light" src={device} alt="" />
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moniterdevice;
