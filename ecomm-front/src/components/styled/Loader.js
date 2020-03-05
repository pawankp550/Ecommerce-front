import React from "react";
import "./css/loader.scss";

export default function Loader() {
  return (
    <div className="loader-overlay">
        <div className="loader">
          <span className="loader-start">L</span><span className="loader-remaining">oading</span><span className="loader-dot1">.</span><span className="loader-dot2">.</span><span className="loader-dot3">.</span>
        </div>
    </div>
  );
}