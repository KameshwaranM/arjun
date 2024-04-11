import React from "react";
import "./pingfooter.css";
import  Ping from "../../Assets/favicon.ico";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";

const Pingfooter = () => {
  return (
    <div className="pingfooter-monitor">
      <div className="pingfooter-Left">
        <img className="pingfooter-CompanyLogo" src={Ping} alt="" />
        <h2 className="pingfooter-Company-Title">Uptime Guard</h2>
        <p className="pingfooter-Company-Notified">
          Downtime happens. Get notified!
        </p>
        <p className="pingfooter-Company-Address">
          Join more than 2,100,000 happy users! <br /> UptimeRobot is one of the
          most popular <br /> website monitoring services in the world.
        </p>

        <div className="pingfooter-Social-icon">
          <IoLogoFacebook className="pingfooter-FacebookIcon" />
          <FaTwitter className="pingfooter-TwitterIcon" />
          <FaLinkedin className="pingfooter-LinkedinIcon" />
          <PiDiscordLogo className="pingfooter-DiscordIcon" />
        </div>
      </div>
      <div className="pingfooter-Right">
        <div className="pingfooter-Monitoring">
          <h1 className="pingfooter-Monitoring-Heading"> Monitoring</h1>
          <ul className="pingfooter-Monitoring-List">
            <li>Website monioring</li>
            <li>SSL monitoring</li>
            <li>Domain monitoring</li>
            <li>Ping monitoring</li>
            <li>Port monitoring</li>
            <li>Cron job monitoring</li>
            <li>Keyword monitoring</li>
          </ul>
        </div>

        <div className="pingfooter-Company">
          <h1 className="pingfooter-company-Heading">Company</h1>
          <ul className="pingfooter-company-List">
            <li>Pricing</li>
            <li>Blog</li>
            <li>Affiliate program</li>
            <li>Terms / Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="pingfooter-Resources">
          <h1 className="pingfooter-Resources-Heading">Resources</h1>
          <ul className="pingfooter-Resources-List">
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

export default Pingfooter;
