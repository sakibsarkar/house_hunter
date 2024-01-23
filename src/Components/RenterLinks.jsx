import { NavLink } from "react-router-dom";

const RenterLinks = () => {
    return (
        <>
            <NavLink to={"/dashboard/my_booking"}>My Booking</NavLink>
            <NavLink to={"/dashboard/booking_details"}>Booking Details</NavLink>
        </>
    );
};

export default RenterLinks;