import React from "react";
import "./incidentpages.css";
import 'animate.css';
import Status from "../../Assets/status-page.svg";
import Subusers from "../../Assets/subusers.svg";

const Incidentpages = () => {
  return (
    <>
      <div className="incidentpages-All">
        <div className="incidentpages-Page">
          <h2 className="incidentpages-Heading">
            Inform your <br /> customers about <br /> incidents with <br />
            <span className="incidentpages-text">status pages</span>.
          </h2>
          <p className="incidentpages-Text">
            Be transparent. Inform customers of <br /> planned outages. Show
            them that you <br /> strive to keep your service 100% online.
          </p>
          <div className="incidentpages-Buttons">
            <p className="incidentpages-stats">Check LIVE demo</p>
            <p className="incidentpages-OR">or</p>
            <p className="incidentpages-Explore">Explore Status Pages</p>
          </div>
        </div>
        <div className="incidentpages-Page-Image">
          <img className="incidentpages-Page-Image2 animate__animated animate__fadeInUp animate__delay-1s text-light" src={Status} alt="" />
        </div>
        <div className="incidentpages-team">
          <img className="incidentpages-SubusersImage animate__animated animate__fadeInUp animate__delay-1s text-light" src={Subusers} alt="" />
          <div className="incidentpages-TeamMembers">
            <p className="incidentpages-Title">
              Add your
              <span className="incidentpages-Member-Span"> team members </span>
              <br /> to keep them notified <span>.</span>
            </p>
            <p className="incidentpages-TeamMembers-Text">
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

export default Incidentpages;
