import "./Navbar.css";
import SearchBox from "../../Components/SearchBox/SearchBox";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useContext, useState } from "react";
import { BsHouseCheck } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../Hooks & Functions/Authcontext";

const Navbar = () => {
    const { user, setUser } = useContext(Context)

    const userName = user?.name?.split(" ")[0] || ""
    const axios = UseAxios()
    const [showDropdown, setShowDropdown] = useState(false)

    const handleLogout = async () => {
        await axios.post("/logout")
        setUser(undefined)
    }
    return (
        <nav>
            <div className="nav_holder">
                <div className="logo">
                    <h2>HOUSE <span>HUNTER</span></h2>
                </div>
                <div className="nav_links">
                    <NavLink to={"/"}>Home</NavLink>
                    <Link to={"/"}>Explore House</Link>
                </div>

                <SearchBox />

                {
                    user?.email ?
                        <div className="userBox" onMouseEnter={() => setShowDropdown(true)} >
                            {userName}<GoChevronDown />
                            {
                                showDropdown ?
                                    <div className="dropDown" onMouseLeave={() => setShowDropdown(false)}>
                                        {
                                            user?.role == "House Owner" ? <Link to={"/dashboard/my_rooms"}>Dashboard</Link>
                                                : <Link to={"/dashboard/my_booking"}>Dashboard</Link>
                                        }
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                    : ""
                            }
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