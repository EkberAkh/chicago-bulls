import "./Header.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/shopping-cart-white.png";
import hamburger from "../../assets/hamburger.png";
import closeMark from "../../assets/close.png";

import { Select, Space } from "antd";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";



export const Header = () => {
  const { t, i18n } = useTranslation();
  const [close, setClose] = useState(false);
  const [language, setLanguage] = useState( localStorage.getItem("language") ||"en");
  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    if ( value === "az" ) {
      i18n.changeLanguage("az");
      setLanguage(value);
    } else if ( value === "en") {
      i18n.changeLanguage("en");
      setLanguage(value);
    } else if ( value === "ru") {
      console.log("ya zdes aquerets");
      setLanguage(value);
    }
  };

  useEffect(()=> {
    localStorage.setItem("language", language)
  }, [language])

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
  };

  localStorage.setItem("language", "en");


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
                    {t("HOME")}
                  </NavLink>
                </li>
                <li>
                  <NavLink id="team" className="link" to="/team">
                  {t("TEAM")}
                  </NavLink>
                </li>
                <li>
                  <NavLink id="gallery" className="link" to="/gallery">
                  {t("GALLERY")}
                  </NavLink>
                </li>
                <li>
                  <NavLink id="news" className="link" to="/news">
                  {t("NEWS")}
                  </NavLink>
                </li>


                <li>
                  <NavLink id="shop" className="link" to="/shop">
                  {t("SHOP")}
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
                  <button className="login-register">{t("Register")}</button>
                </Link>
                <Space wrap>
                  <Select
                    defaultValue={language}
                    style={{ width: 68 }}
                    onChange={handleChange}
                    options={[
                      { value: "az", label: "AZ"},
                      { value: "en", label: "EN"},
                      { value: "ru", label: "RU"},
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
              {t("HOME")}
              </NavLink>
            </li>
            <li>
              <NavLink id="team" className="link" to="/team">
              {t("TEAM")}
              </NavLink>
            </li>
            <li>
              <NavLink id="gallery" className="link" to="/gallery">
              {t("GALLERY")}
              </NavLink>
            </li>
            <li>
              <NavLink id="news" className="link" to="/news">
              {t("NEWS")}
              </NavLink>
            </li>

            <li>
              <NavLink id="shop" className="link" to="/shop">
              {t("SHOP")}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
