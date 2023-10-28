import logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Login.css";
import { AnimatedPage } from "../../AnimatedPage";
import { useTranslation } from "react-i18next";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

export const Login = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <AnimatedPage>
        <div className="container form-container">
          <img src={logo} alt="CHICAGO BULLS" />
          <form>
            <div className="input">
              <div className="labels">
                <label htmlFor="email">{t("EmailOrPhone")}</label>
                <NavLink className="login-input" to="/">
                  {t("GoHome")}
                </NavLink>
              </div>
              <input
                type="email"
                id="email"
                placeholder="abcdemail@gmail.com"
              />
            </div>
            <div className="input">
              <label htmlFor="password">{t("Password")}</label>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder={t("EnterPassword")}
                />
                <InputRightElement marginRight="2px" width="4.5rem">
                  <Button
                    id="passbtn"
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="login-btn">
              <button type="submit">{t("Login")}</button>
              <Link to="/register" id="login">
                {t("Haventyet")}
              </Link>
            </div>
          </form>
        </div>
      </AnimatedPage>
    </>
  );
};
