import React from "react";
import "./keyword.css";
import expedialogo from "../../Assets/expedia-logo.svg";
import godaddylogo from "../../Assets/godaddy-logo.svg";
import ibmlogo from "../../Assets/ibm-logo.svg";
import nasalogo from "../../Assets/nasa.svg";
import moodys from "../../Assets/moodys-logo.svg";


const Keyword = () => {
  return (
    <div className="Keyword">
      <div className="Keyword-Title-Left">
        <h3 className="keyword-Leading">
          Create simple <br />
          <span className="Keyword-span">Keyword-based </span> monitors
          <span className="Keyword-Dot"> .</span>
        </h3>

        <p className="Keyword-FreeContent">
          When you need to check for a specific keyword or a 
          <span className="Keyword-Total"> keyword pharse on a page.</span>
        </p>
        <button className="wordMonitering-Button">
          Start Monitering for FREE
        </button>
      </div>
      
      <div className="Keyword-Company-Images">
        <div className="Keyword-Company">
          <img className="Keyword-godaddylogo" src={godaddylogo} alt="" />
          <img className="Keyword-nasalogo" src={nasalogo} alt="" />
          <img className="Keyword-moodyslogo" src={moodys} alt="" />
          <img className="Keyword-ibmlogo" src={ibmlogo} alt="" />
          <img className="Keyword-expedialogo" src={expedialogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Keyword;
