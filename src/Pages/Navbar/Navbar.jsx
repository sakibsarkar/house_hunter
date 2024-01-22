import "./Navbar.css";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { BsHouseCheck } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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

                <div className="auth_btn">
                    <Link to={"/register"}><BsHouseCheck />Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;