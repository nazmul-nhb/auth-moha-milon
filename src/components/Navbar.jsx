import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <nav className="flex justify-between items-center">
            <div><h3 className="text-2xl font-semibold">Moha Milon</h3></div>
            <div>
                <ul className="flex justify-center gap-6 font-medium">
                    {navLinks}
                </ul>
            </div>

            {
                user?.email
                    ? <div className="flex gap-3 items-center"><h3 className="text-2xl font-semibold"><li className="list-none"><NavLink to={'/profile'}>{user?.email}</NavLink></li></h3>
                        <button onClick={handleLogOut} className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Log out</button></div>
                    : <Link to={'/login'} className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Login</Link>
            }


        </nav>
    );
};

export default Navbar;