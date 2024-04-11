import React from "react";
import "./statuspage.css";
import 'animate.css';
import Status from "../../../Assets/status-page.svg";
import Subusers from "../../../Assets/subusers.svg";

const Statuspage = () => {
  return (
    <>
      <div className="statuspage-All">
        <div className="statuspage-Page">
          <h2 className="statuspage-Heading">
            Inform your <br /> customers about <br /> incidents with <br />
            <span className="statuspage-text">status pages</span>.
          </h2>
          <p className="statspages-Text">
            Be transparent. Inform customers of <br /> planned outages. Show
            them that you <br /> strive to keep your service 100% online.
          </p>
          <div className="statuspage-Buttons">
            <p className="statuspage-stats">Check LIVE demo</p>
            <p className="statuspage-OR">or</p>
            <p className="statuspage-Explore">Explore Status Pages</p>
          </div>
        </div>
        <div className="statuspage-Page-Image">
          <img className="statuspage-Page-Image2 animate__animated animate__fadeInUp animate__delay-1s text-light" src={Status} alt="" />
        </div>
        <div className="statuspage-team">
          <img className="statuspage-SubusersImage animate__animated animate__fadeInUp animate__delay-1s text-light" src={Subusers} alt="" />
          <div className="statuspage-TeamMembers">
            <p className="statuspage-Title">
              Add your
              <span className="statuspage-Member-Span"> team members </span>
              <br /> to keep them notified <span>.</span>
            </p>
            <p className="statuspage-TeamMembers-Text">
              You can invite all your team members to access <br /> your
              monitors, keep them notified and manage <br /> incidents. Choose
              from three levels of user access: <br /> read, write and
              notify-only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statuspage;
