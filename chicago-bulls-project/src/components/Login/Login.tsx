import logo from "./../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    return (
        <>
            <div className="container form-container">
                <img src={logo} alt="CHICAGO BULLS" />
                <form>
                    <div className="input" >
                    <div className="labels">
                            <label htmlFor="email">Email or Phone</label>
                            <NavLink className="login-input" to="/">
                                Go Home
                            </NavLink>
                        </div>
                        <input type="email" id="email" placeholder="youremail@gmail.com" />
                    </div>
                    <div className="input" >
                        <label htmlFor="username">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="login-btn">
                        <button type="submit">Login</button>
                        <Link to="/register" id="login" >Haven't register yet?</Link>
                    </div>
                </form>
            </div>
        </>
    )
}