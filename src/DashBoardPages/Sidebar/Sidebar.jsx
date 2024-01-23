import "./Sidebar.css";
import OwnerLinks from "../../Components/OwnerLinks";
import RenterLinks from "../../Components/RenterLinks";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../Hooks & Functions/Authcontext";

const Sidebar = () => {
    const { user } = useContext(Context)
    return (
        <div className="sidebarCon">
            <Link className="logo" to={"/"}>HOUSE <span>HUNTER</span></Link>
            <div className="dashLinks">
                {
                    user?.role === "House Owner" ?
                        <OwnerLinks /> : ""
                }
                {
                    user?.role === "House Renter" ?
                        <RenterLinks /> : ""
                }
            </div>
        </div>
    );
};

export default Sidebar;