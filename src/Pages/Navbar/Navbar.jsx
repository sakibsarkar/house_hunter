import "./Navbar.css";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { useContext } from "react";
import { BsHouseCheck } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../Hooks & Functions/Authcontext";

const Navbar = () => {
    const { user } = useContext(Context)

    const userName = user?.name?.split(" ")[0] || ""
    return (
        <nav>
            <div className="nav_holder">
                <div className="logo">
                    <h2>HOUSE <span>HUNTER</span></h2>
                </div>
                <div className="nav_links">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/explore"}>Explore House</NavLink>
                </div>

                <SearchBox />

                {
                    user?.email ?
                        <div className="userBox">
                            {userName}<GoChevronDown />
                        </div>
                        :
                        <div className="auth_btn">
                            <NavLink to={"/register"}><BsHouseCheck />Register</NavLink>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;