import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="heading">Recently closed</div>
      <div className="lists">
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faWindows} />
            </div>
            <div className="text">Window</div>
          </div>
          <div className="para">54 years</div>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faWindows} />
            </div>
            <div className="text">Window</div>
          </div>
          <div className="para">5 days</div>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="text">Nmart Landing ...</div>
          </div>
          <div className="para">5 days</div>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faWindows} />
            </div>
            <div className="text">Window</div>
          </div>
          <div className="para">6 days</div>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="text">network error p...</div>
          </div>
          <div className="para">6 days</div>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="text">nmart-trade-la...</div>
          </div>
          <div className="para">6 days</div>
        </div>
        <div className="item">
          <div className="left">
            <div className="icon">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="text">Nmart landing ...</div>
          </div>
          <div className="para">6 days</div>
        </div>
      </div>
    </div>
  );
}

export default App;
