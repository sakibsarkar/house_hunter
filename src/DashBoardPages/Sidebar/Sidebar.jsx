import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebarCon">
            <div className="dashLinks">
                <NavLink to={"/dashboard/my_rooms"}>My Rooms</NavLink>
                <NavLink to={"/"}>My Rooms</NavLink>
                <NavLink to={"/"}>My Rooms</NavLink>
                <NavLink to={"/"}>My Rooms</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;