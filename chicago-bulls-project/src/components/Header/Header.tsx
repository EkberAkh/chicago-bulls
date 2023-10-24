import "./Header.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/shopping-cart-white.png";
import hamburger from "../../assets/hamburger.png";
import closeMark from "../../assets/close.png";

import { Select, Space } from "antd";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Header = () => {
  const [close, setClose] = useState(false);
  function hamburgerHandler() {
    setClose(!close);

    const hamburgerScreen = document.querySelector(".hamburger-screen");
    const background = document.querySelector(".menu-back");
    const body = document.querySelector("body");
    body?.classList.toggle('overflow-hidden');
    // hamburgerScreen?.classList.toggle('menu-slide-in');
    console.log(close);

    if (!close) {
      // Slide out animation
      hamburgerScreen?.classList.remove("hamburger-slide-out"); // Remove the slide-out class
      hamburgerScreen?.classList.add("hamburger-slide-in");
    } else {
      // Slide in animation
      hamburgerScreen?.classList.remove("hamburger-slide-in"); // Remove the slide-in class
      hamburgerScreen?.classList.add("hamburger-slide-out");
    }
    hamburgerScreen?.classList.toggle("hamburger-visible");

    background?.classList.toggle("d-block");

    background?.addEventListener("click", () => {
      console.log("background clicked");
      hamburgerScreen?.classList.remove("hamburger-visible");
      background?.classList.remove("d-block");
      body?.classList.remove('overflow-hidden');
      hamburgerScreen?.classList.remove("hamburger-slide-in"); // Remove the slide-in class
      hamburgerScreen?.classList.add("hamburger-slide-out");
      setClose(false);
    });
  }


  return (
    <>
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
              <button onClick={hamburgerHandler} className="hamburger-menu">
                <img src={close ? closeMark : hamburger} alt="hamburger" />
              </button>
              <img className="cart" src={cart} alt="" />
              <div className="nav-end">
                <Link to="/register">
                  <button className="login-register">Register</button>
                </Link>
                <Space wrap>
                  <Select
                    defaultValue="en"
                    style={{ width: 68 }}
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
        </div>
      </header>
      <div className="menu-back d-none"></div>
      <div className="hamburger-screen">
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
      </div>
    </>
  );
};