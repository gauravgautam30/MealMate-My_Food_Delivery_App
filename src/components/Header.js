import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnName, setbtnName] = useState("Log in");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Log in"
                  ? setbtnName("Log out")
                  : setbtnName("Log in");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// App.js
