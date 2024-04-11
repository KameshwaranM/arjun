import React from "react";
import "./keywordwatchdog.css";
import 'animate.css';
import watchdog from "../../../Assets/in-stock-watcher.svg";

const Keywordwatchdog = () => {
    return (
        <div>
            <div className="keywordwatchdog">
                <div className="keywordwatchdog-Left">
                    <img className="keywordwatchdog-watchdog animate__animated animate__fadeInUp animate__delay-1s text-light" src={watchdog} alt="" />
                </div>

                <div className="keywordwatchdog-All">
                    <div className="keywordwatchdog-Content">
                        <h2 className="keywordwatchdog-Heading">
                            <span className="keywordwatchdog-span">A </span><span className="keywordwatchdog-dog"> watchdog</span> <span className="keywordwatchdog-forany">for any</span> <br /><span className="keywordwatchdog-sites">websites</span><span className="keywordwatchdog-Dot">.</span>
                        </h2>
                        <p className="keywordwatchdog-Paragraph">
                            Is the product you want to buy out of <br />
                            Stock and the shop doesn't have a <br />
                            Watchdog? Just set up a keyword <br />
                            Monitor!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keywordwatchdog;
