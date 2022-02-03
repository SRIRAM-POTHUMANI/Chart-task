import React, { useState } from "react";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import "./App.css";

function Footer() {
  const [darkmode, setdarkmode] = useState(false);

  return (
    <div className="Footer">
      <div>
        <h2>Bitcoin Rankings</h2>
      </div>
      {darkmode ? (
        <Brightness4Icon
          onClick={() => setdarkmode(!darkmode)}
          fontSize="large"
        />
      ) : (
        <Brightness4OutlinedIcon
          onClick={() => setdarkmode(!darkmode)}
          fontSize="large"
        />
      )}
    </div>
  );
}

export default Footer;
