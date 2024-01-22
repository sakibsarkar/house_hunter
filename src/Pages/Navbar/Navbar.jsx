import "./Navbar.css";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { useContext } from "react";
import { BsHouseCheck } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../Hooks & Functions/Authcontext";

const Navbar = () => {
    const { user } = useContext(Context)
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
                    user ?
                        <div>
                            {user?.name}
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