import React from "react";
import "./accountmonitor.css";
import AppStore from "../../../Assets/appstore-badge.svg";
import GoogleStore from "../../../Assets/google-playstore-badge.svg";

const Accountmonitor = () => {
  return (
    <div>
      <div className="account-monitor">
        <div className="accountmonitor-Para">
          <h2 className="accountmonitor-heading">
            Get your <span className="accountmonitor-Now"> FREE account </span>now,
            <br /> 50 monitors included!
          </h2>
          <button className="accountmonitor-Button">
            Start monitoring in 30 seconds
          </button>
          <p className="accountmonitor-CreditCard">No credit card required!</p>
          <div className="accountmonitor-Available">
            <p className="accountmonitor-AvailableStore">Available also on:</p>
            <img className="accountmonitor-GoogleStoreImage" src={GoogleStore} alt="" />
            <img className="accountmonitor-AppleStoreImage" src={AppStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountmonitor;
