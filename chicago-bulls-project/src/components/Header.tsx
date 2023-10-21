import "./Header.css";
import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart-white.png";
import hamburger from "../assets/hamburger.png";

import { Select, Space } from "antd";
import { NavLink } from "react-router-dom";

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
                <NavLink id="home" className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink id="team" className="link" to="/team">
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink id="gallery" className="link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink id="news" className="link" to="/news">
                  News
                </NavLink>
              </li>

              <li>
                <NavLink id="shop" className="link" to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-end">
          <button className="hamburger-menu">
              <img src={hamburger} alt="hamburger" />

            </button>
            <img src={cart} className="shopping-cart" alt="" />
            <Space wrap>
              <Select
                defaultValue="en"
                style={{ width: 60 }}
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
