import logo from "./../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import "./Register.css"
import { AnimatedPage } from "../../AnimatedPage"
import { useTranslation } from "react-i18next"

export const Register = () => {
    const {t} = useTranslation();
    return (
        <>
            <AnimatedPage>
                <div className="container form-container">
                    <img src={logo} alt="CHICAGO BULLS" />
                    <form>
                        <div className="input" >
                            <div className="labels">
                                <label htmlFor="username">{t("Name")}</label>
                                <NavLink className="register-input" to="/">
                                {t("GoHome")}
                                </NavLink>
                            </div>
                            <input required type="text" id="username" placeholder={t("YourName")} />
                        </div>
                        <div className="input" >
                            <label htmlFor="surname">{t("Surname")}</label>
                            <input required type="text" id="surname" placeholder={t("YourSurname")} />
                        </div>
                        <div className="input" >
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="abcdemail@gmail.com" />
                        </div>
                        <div className="input" >
                            <label htmlFor="phone">{t("Phone")}</label>
                            <input type="tel" id="phone" placeholder="+994777777777" />
                        </div>
                        <div className="input" >
                            <label htmlFor="username">{t("Password")}</label>
                            <input required type="password" id="password" />
                        </div>
                        <div className="register-btn">
                            <button type="submit">{t("Register")}</button>
                            <Link to="/login" id="login" >{t("HaveAccount")}</Link>
                        </div>
                    </form>
                </div>
            </AnimatedPage>
        </>
    )
}
