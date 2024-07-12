import React from "react";
import "./Navigator.css";

function NavigatorOptions({ title, selected }) {
  return (
    <div className={`nav_options ${selected && "nav--active"}`}>
      <div>
        <ul>
          <li>
            <h2>{title}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigatorOptions;
