import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Log in");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            <Link to={"/cart"} className="font-bold text-center text-white m-2">
              Cart - ( {cartItems.length} items)
            </Link>

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

            <button
              className="onlineStatus-btn"
              style={{ background: `${onlineStatus ? "green" : "red"}` }}
            >
              {onlineStatus ? "Online" : "offline"}
            </button>
            <li className="user-name">{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// App.js
