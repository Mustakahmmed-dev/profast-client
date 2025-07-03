import { Link, NavLink } from "react-router";
import profastLogo from '../assets/logo.png';
import UseAuth from "../hooks/useAuth";
import ProfastLogo from "./ProfastLogo";

const Navbar = () => {
    const links = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/about-us">About Us</NavLink> </li>
        <li> <NavLink to="/services">Services</NavLink> </li>
        <li> <NavLink to="/coverage">Coverage</NavLink> </li>
        <li> <NavLink to="/pricing">Pricing</NavLink> </li>
        <li> <NavLink to="be-a-rider">Be a Rider</NavLink> </li>
    </>
    const { user, logOut } = UseAuth();

    return (
        <div className="navbar bg-white shadow-sm p-4 w-12/13 mx-auto mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-600">
                        {links}
                    </ul>
                </div>
               <ProfastLogo></ProfastLogo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-600">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? <div className="flex items-center gap-1">
                    <img className="rounded-full w-[60px]" src={user.photoURL} alt="Photo error" />
                    <button onClick={logOut} className="btn btn-neutral">Log Out</button>
                </div> : <div>
                    <Link to="/login" className="btn ">Sign In</Link>
                    <Link to="/be-a-rider" className="btn bg-[#CAEB66]">Be a Rider</Link>
                </div>
                }

            </div>
        </div>
    )
}

export default Navbar;