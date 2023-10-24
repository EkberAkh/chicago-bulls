import logo from "./../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import "./Register.css"
import { AnimatedPage } from "../../AnimatedPage"

export const Register = () => {
    return (
        <>
            <AnimatedPage>
                <div className="container form-container">
                    <img src={logo} alt="CHICAGO BULLS" />
                    <form>
                        <div className="input" >
                            <div className="labels">
                                <label htmlFor="username">Name</label>
                                <NavLink className="register-input" to="/">
                                    Go Home
                                </NavLink>
                            </div>
                            <input type="text" id="username" placeholder="Your Name" />
                        </div>
                        <div className="input" >
                            <label htmlFor="surname">Surname</label>
                            <input type="text" id="surname" placeholder="Your Surname" />
                        </div>
                        <div className="input" >
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="youremail@gmail.com" />
                        </div>
                        <div className="input" >
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" placeholder="+994777777777" />
                        </div>
                        <div className="input" >
                            <label htmlFor="username">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="register-btn">
                            <button type="submit">Register</button>
                            <Link to="/login" id="login" >Have an account?</Link>
                        </div>
                    </form>
                </div>
            </AnimatedPage>
        </>
    )
}
