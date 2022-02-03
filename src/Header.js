import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header(darkmode) {
  return (
    <nav className={darkmode ? "darkHeader" : "header"}>
      <div className="container-fluid justify-content-betweeen">
        <Link to="/line">
          <button className="btn btn-outline-success me-2" type="button">
            Line Chart
          </button>
        </Link>
        <Link to="/">
          <button class="btn btn-outline-success me-2" type="button">
            Pie Chart
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
