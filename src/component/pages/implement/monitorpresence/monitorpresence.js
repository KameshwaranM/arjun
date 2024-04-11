import React from "react";
import "./monitorpresence.css";
import 'animate.css';
import presence from "../../../Assets/text-on-page.svg";

const MoniterPresence = () => {
    return (
        <div>
            <div className="monitorpresence">
                <div className="monitorpresence-Right">
                    <img className="monitorpresence-presence animate__animated animate__fadeInUp animate__delay-1s text-light" src={presence} alt="" />
                </div>

                <div className="monitorpresence-All">
                    <div className="monitorpresence-Content">
                        <h2 className="monitorpresence-Heading">
                            <span className="monitorpresence-span">Monitor the</span> <br />
                            <span className="monitorpresence-or">presence or</span> <br /><span className="monitorpresence-absence">absence</span> <span className="monitorpresence-any"> of any</span> <br /><span className="monitorpresence-pharse">world or pharse</span> <span className="monitorpresence-Dot">.</span>
                        </h2>
                        <p className="monitorpresence-Paragraph">
                            Set up on unlimited number of <br />
                            monitors based on whether the <br />
                            keyword is or is not included in the <br />
                            page HTML code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoniterPresence;
