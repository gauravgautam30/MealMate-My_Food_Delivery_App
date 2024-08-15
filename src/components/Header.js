import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnName, setbtnName] = useState("Log in");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
        <div className="nav-items">
          <ul>
            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact Us
              </Link>
            </li>
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
