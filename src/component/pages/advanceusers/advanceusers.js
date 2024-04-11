import React from "react";
import "./advanceusers.css";
import 'animate.css';


const Advanceusers = () => {
  return (
    <div>
      <div className="advanceusers-users animate__animated animate__fadeInUp animate__delay-1s text-light">
        <div className="advanceusers-notifications">
          <h2 className="advanceusers-notifications-Heading">
            <span className="advanceusers-control"> Advanced features</span> for
            advanced users <span className="advanceusers-Dot"> .</span>
          </h2>
        </div>
        <div className="advanceusers-control-details">
          <div className="advanceusers-control-items">
            <div className="advanceusers-incedent">
              <h3 className="advanceusers-incedent-Heading">
              Recurring notifications
              </h3>
              <p className="advanceusers-incedent-Text">
              Set threshold and recurrence <br /> parameters 
              so that you don't miss any <br /> serious outage. 
              </p>
            </div>

            <div className="advanceusers-response">
              <div className="advanceusers-times">
                <h3 className="advanceusers-window-timings">Response times</h3>
                <p className="advanceusers-window-controlling">
                See your response times in a chart and <br /> reveal 
                performance hiccups.
                </p>
              </div>
            </div>
            <div className="advanceusers-window">
              <div className="advanceusers-Maintain">
                <h3 className="advanceusers-window-Heading">Maintenance windows</h3>
                <p className="advanceusers-window-Text">
                  Set up maintenance windows to prevent <br /> alarms during
                  planned maintenance.
                </p>
              </div>
            </div>
            <div className="advanceusers-Location">
            <div className="advanceusers-Location-Detail">
              <h3 className="advanceusers-Location-Heading">
                Multi-location checks
              </h3>
              <p className="advanceusers-Location-Text">
                We verify incidents from multiple <br /> locations to prevent
                false-positives.
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className="advanceusers-rootcauses">
          <div className="advanceusers-rootcauses-Detail">
            <div className="advanceusers-causes">
              <h3 className="advanceusers-rootcauses-Heading">
              Incidents with root causes
              </h3>
              <p className="advanceusers-rootcauses-Text">
              Reduce the risk of incident recurrence by <br /> analyzing 
              the issue closely.
              </p>
            </div>
            <div className="advanceusers-Custom">
              <div className="advanceusers-custom-Detail">
                <h3 className="advanceusers-Custom-Heading">SMS and voice call notifications</h3>
                <p className="advanceusers-Custom-Text">
                No internet? We can call or text you <br /> when 
                something goes wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanceusers;
