import React from "react";
import "./features.css";
import 'animate.css';


const Features = () => {
  return (
    <div>
      <div className="features-users animate__animated animate__fadeInUp animate__delay-1s text-light">
        <div className="features-notifications">
          <h2 className="features-notifications-Heading">
            <span className="features-control"> Advanced features</span> for
            advanced users <span className="features-Dot"> .</span>
          </h2>
        </div>
        <div className="features-control-details">
          <div className="features-control-items">
            <div className="features-incedent">
              <h3 className="features-incedent-Heading">
              Recurring notifications
              </h3>
              <p className="features-incedent-Text">
              Set threshold and recurrence <br /> parameters 
              so that you don't miss any <br /> serious outage. 
              </p>
            </div>

            <div className="features-response">
              <div className="features-times">
                <h3 className="features-window-timings">Response times</h3>
                <p className="features-window-controlling">
                See your response times in a chart and <br /> reveal 
                performance hiccups.
                </p>
              </div>
            </div>
            <div className="features-window">
              <div className="features-Maintain">
                <h3 className="features-window-Heading">Maintenance windows</h3>
                <p className="features-window-Text">
                  Set up maintenance windows to prevent <br /> alarms during
                  planned maintenance.
                </p>
              </div>
            </div>
            <div className="features-Location">
            <div className="features-Location-Detail">
              <h3 className="features-Location-Heading">
                Multi-location checks
              </h3>
              <p className="features-Location-Text">
                We verify incidents from multiple <br /> locations to prevent
                false-positives.
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className="features-rootcauses">
          <div className="features-rootcauses-Detail">
            <div className="features-causes">
              <h3 className="features-rootcauses-Heading">
              Incidents with root causes
              </h3>
              <p className="features-rootcauses-Text">
              Reduce the risk of incident recurrence by <br /> analyzing 
              the issue closely.
              </p>
            </div>
            <div className="features-Custom">
              <div className="features-custom-Detail">
                <h3 className="features-Custom-Heading">SMS and voice call notifications</h3>
                <p className="features-Custom-Text">
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

export default Features;
