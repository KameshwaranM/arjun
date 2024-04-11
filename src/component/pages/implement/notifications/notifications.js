// eslint-disable-next-line no-unused-vars
import React from "react";
import "./notifications.css";
import Email from "../../../Assets/integration-email-dark.svg";
import Sms from "../../../Assets/integration-sms-dark.svg";
import Voicecall from "../../../Assets/integration-voice-dark.svg";
import Slack from "../../../Assets/integration-slack.svg";
import Discord from "../../../Assets/integration-discord.svg";
import 'animate.css';


const Notifications = () => {
  return (
    <div>
      <div className="notification">
        <div className="KeepUpTime-Right animate__animated animate__fadeInUp animate__delay-1s text-light">
          <img className="notification-EmailImage" src={Email} alt="" />
          <img className="notification-sms-Images2" src={Sms} alt="" />
          <img className="notification-voicecallImage3" src={Voicecall} alt="" />
          <img className="notification-slackImage4" src={Slack} alt="" />
          <img className="notification-discordImage5" src={Discord} alt="" />

        </div>

        <div className="notification-All">
          <div className="notification-Content">
            <h2 className="notification-Heading">
              <span className="notification-span">Choose your preferred</span> <br />
              types of <span className="notification-your">notifications</span> <span className="notification-Dot">.</span>
            </h2>
            <p className="notification-Paragraph">
              Get instant alerts via email, SMS, voice call or <br /> through one
              of many integrations (such as Slack, <br /> Zapier, 
              Splunk, etc.).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
