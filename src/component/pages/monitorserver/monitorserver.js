import React from "react";
import "./monitorserver.css";
import 'animate.css';
import server from "../../Assets/server-availability.svg";

const Moniterserver = () => {
    return (
        <div>
            <div className="monitorserver">
                <div className="monitorserver-Right">
                <img
            className="monitorserver-presence animate__animated animate__fadeInUp animate__delay-1s text-light"
            src={server}
            alt=""
          />
                </div>

                <div className="monitorserver-All">
                    <div className="monitorserver-Content">
                        <h2 className="monitorserver-Heading">
                            <span className="monitorserver-span">Monitor</span>
                            <span className="monitorserver-or"> server</span> <br /><span className="monitorserver-absence">availability</span>  <span className="monitorserver-Dot">.</span>
                        </h2>
                        <p className="monitorserver-Paragraph">
                            Anything can happen with your server, <br />
                            make sure it’s always up and ping your <br /> publicly available IP address.
                               
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moniterserver;
