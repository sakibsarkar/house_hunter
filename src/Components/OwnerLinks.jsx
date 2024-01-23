import { NavLink } from "react-router-dom";

const OwnerLinks = () => {
    return (
        <>
            <NavLink to={"/dashboard/my_rooms"}>My Rooms</NavLink>
            <NavLink to={"/dashboard/manage_room"}>Manage Rooms</NavLink>
        </>
    );
};

export default OwnerLinks;