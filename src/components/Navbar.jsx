import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const authInfo = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <nav className="flex justify-between">
            <div><h3 className="text-2xl font-semibold">Moha Milon</h3></div>
            <div>
                <ul className="flex justify-center gap-6 font-medium">
                    {navLinks}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold"><Link>{authInfo.name}</Link></h3>
            </div>
        </nav>
    );
};

export default Navbar;