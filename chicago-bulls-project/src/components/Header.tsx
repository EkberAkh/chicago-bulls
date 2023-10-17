import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";
import hamburger from "../assets/hamburger.png";

import { Select, Space } from "antd";
import { Link } from "react-router-dom";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-items">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
          
            <ul>
              <li>
                <Link className="link active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="link" to="/news">
                  News
                </Link>
              </li>

              <li>
                <Link className="link" to="/shop">
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-end">
          <button className="hamburger-menu">
              <img src={hamburger} alt="hamburger" />

            </button>
            <img src={cart} alt="" />
            <Space wrap>
              <Select
                defaultValue="en"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "az", label: "AZ" },
                  { value: "en", label: "EN" },
                  { value: "ru", label: "RU" },
                ]}
              />
            </Space>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
