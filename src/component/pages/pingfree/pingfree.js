import React from "react";
import "./pingfree.css";
import AppStore from "../../Assets/appstore-badge.svg";
import GoogleStore from "../../Assets/google-playstore-badge.svg";

const Pingfree = () => {
  return (
    <div>
      <div className="pingfree-monitor">
        <div className="pingfree-Para">
          <h2 className="pingfree-heading">
            Get your <span className="pingfree-Now"> FREE account </span>now,
            <br /> 50 monitors included!
          </h2>
          <button className="pingfree-Button">
            Start monitoring in 30 seconds
          </button>
          <p className="pingfree-CreditCard">No credit card required!</p>
          <div className="pingfree-Available">
            <p className="pingfree-AvailableStore">Available also on:</p>
            <img className="pingfree-GoogleStoreImage" src={GoogleStore} alt="" />
            <img className="pingfree-AppleStoreImage" src={AppStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pingfree;
