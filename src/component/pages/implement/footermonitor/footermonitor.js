// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footermonitor.css";
import LogoImage from "../../../Assets/favicon.ico";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";

const Footermonitor = () => {
  return (
    <div className="Footer-monitor">
      <div className="Footermonitor-Left">
        <img className="Footermonitor-CompanyLogo" src={LogoImage} alt="" />
        <h2 className="Footermonitor-Company-Title">Uptime Guard</h2>
        <p className="Footermonitor-Company-Notified">
          Downtime happens. Get notified!
        </p>
        <p className="Footermonitor-Company-Address">
          Join more than 2,100,000 happy users! <br /> UptimeRobot is one of the
          most popular <br /> website monitoring services in the world.
        </p>

        <div className="Footermonitor-Social-icon">
          <IoLogoFacebook className="Footermonitor-FacebookIcon" />
          <FaTwitter className="Footermonitor-TwitterIcon" />
          <FaLinkedin className="Footermonitor-LinkedinIcon" />
          <PiDiscordLogo className="Footermonitor-DiscordIcon" />
        </div>
      </div>
      <div className="Footermonitor-Right">
        <div className="Footermonitor-Monitoring">
          <h1 className="Footermonitor-Monitoring-Heading"> Monitoring</h1>
          <ul className="Footermonitor-Monitoring-List">
            <li>Website monioring</li>
            <li>SSL monitoring</li>
            <li>Domain monitoring</li>
            <li>Ping monitoring</li>
            <li>Port monitoring</li>
            <li>Cron job monitoring</li>
            <li>Keyword monitoring</li>
          </ul>
        </div>

        <div className="Footermonitor-Company">
          <h1 className="Footermonitor-company-Heading">Company</h1>
          <ul className="Footermonitor-company-List">
            <li>Pricing</li>
            <li>Blog</li>
            <li>Affiliate program</li>
            <li>Terms / Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="Footermonitor-Resources">
          <h1 className="Footermonitor-Resources-Heading">Resources</h1>
          <ul className="Footermonitor-Resources-List">
            <li>Integration</li>
            <li>API</li>
            <li>FAQs</li>
            <li>Help center</li>
            <li>Locations & IPs</li>
            <li>Comparisons</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footermonitor;
