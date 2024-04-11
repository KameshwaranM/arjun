import React from "react";
import "./monitorresponse.css";
import 'animate.css';
import response from "../../Assets/server-response-time.svg";

const Moniterresponse = () => {
    return (
        <div>
            <div className="monitorresponse">
                <div className="monitorresponse-Right">
                    <img className="monitorresponse-presence animate__animated animate__fadeInUp animate__delay-1s text-light" src={response} alt="" />
                </div>

                <div className="monitorresponse-All">
                    <div className="monitorresponse-Content">
                        <h2 className="monitorresponse-Heading">
                            <span className="monitorresponse-span">Monitor</span>
                            <span className="monitorresponse-or"> server</span> <br /><span className="monitorresponse-absence">response time.</span>  
                        </h2>
                        <p className="monitorresponse-Paragraph">
                        Spot peaks in your server response <br />
                        time. We are checking your server <br /> every minute.
                               
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moniterresponse;
