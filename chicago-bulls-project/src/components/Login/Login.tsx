import logo from "./../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import "./Login.css"
import { AnimatedPage } from "../../AnimatedPage"
import { useTranslation } from "react-i18next"
// import {  useEffect, useState } from "react"
// import { useRef } from 'react';

export const Login = () => {
    // const [ password, setPassword ] = useState("");
    // const [ email, setEmail] = useState("");
    // useEffect(()=>{
    //     const email = document.querySelector("#email")
    // const password = document.querySelector("#password")
    // console.log(password);
    // })
    // const ref = useRef(null)
    // console.log(ref);

    // function inputHandlerPassword(e: any) {
    //     setPassword(e.target.value);
    // }

    // function inputHandlerEmail(e: any) {
    //     setEmail(e.target.value);
    // }

    const { t } = useTranslation();
    
    return (
        <>
            <AnimatedPage>
                <div className="container form-container">
                    <img src={logo} alt="CHICAGO BULLS" />
                    <form>
                        <div className="input" >
                            <div className="labels">
                                <label htmlFor="email">{t("EmailOrPhone")}</label>
                                <NavLink className="login-input" to="/">
                                {t("GoHome")}
                                </NavLink>
                            </div>
                            <input type="email" id="email" placeholder="abcdemail@gmail.com" />
                        </div>
                        <div className="input" >
                            <label htmlFor="password">{t("Password")}</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="login-btn">
                            <button type="submit">{t("Login")}</button>
                            <Link to="/register" id="login" >{t("Haventyet")}</Link>
                        </div>
                    </form>
                </div>
            </AnimatedPage>
        </>
    )
}