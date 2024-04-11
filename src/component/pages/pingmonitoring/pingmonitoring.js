import React from "react";
import "./pingmonitoring.css";
import expedialogo from "../../Assets/expedia-logo.svg";
import godaddylogo from "../../Assets/godaddy-logo.svg";
import ibmlogo from "../../Assets/ibm-logo.svg";
import nasalogo from "../../Assets/nasa.svg";
import moodys from "../../Assets/moodys-logo.svg";


const Pingmonitoring = () => {
  return (
    <div className="ping">
      <div className="ping-Title-Left">
        <h3 className="ping-Leading">
        <span className="ping-span">Ping </span>
          any device or server
          <span className="ping-Dot"> .</span>
        </h3>

        <p className="ping-FreeContent">
        Make sure your server or any device in the network is
          <span className="ping-Total">always available with the ping monitoring.</span>
        </p>
        <p className="ping-Content">
          Get 50 Monitors
          <span className="ping-Totalfree"> totally FREE .</span>
        </p>
        <button className="ping-Button">
          Start Monitering for FREE
        </button>
      </div>
      
      <div className="ping-Company-Images">
        <div className="ping-Company">
          <img className="ping-godaddylogo" src={godaddylogo} alt="" />
          <img className="ping-nasalogo" src={nasalogo} alt="" />
          <img className="ping-moodyslogo" src={moodys} alt="" />
          <img className="ping-ibmlogo" src={ibmlogo} alt="" />
          <img className="ping-expedialogo" src={expedialogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pingmonitoring;
