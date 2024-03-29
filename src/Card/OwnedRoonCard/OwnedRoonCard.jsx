import "./OwnedRoonCard.css";
import BookingDetailsModal from "../../Components/BookingDetailsModal/BookingDetailsModal";
import RoomUpdateForm from "../../Components/RoomUpdateForm/RoomUpdateForm";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const OwnedRoonCard = ({ room, refetch }) => {
    const { _id, name, city, bedrooms, bathrooms, room_size, availability, rent_per_month, image, description, ownedBy, ownerPhone, address, isAvailable } = room || {}

    const [showBookingDetails, setShowBookingDetails] = useState(false)

    return (
        <div className="asset_card">

            <div className="asset_img">
                {
                    !isAvailable ?
                        <p className="booked">Booked</p>
                        : ""
                }
                <img src={image} alt="" />
            </div>
            <div className="asset_info">
                <h2>{name}</h2>
                <div className="row">
                    <p>{city}</p>
                    <p>${rent_per_month}</p>
                </div>
                <div className="row">
                    <p>Bed: {bedrooms}</p>
                    <p>Bath: {bathrooms}</p>
                </div>
                <div className="row">
                    <p>{room_size}Sq Ft</p>
                    <p>Date : {availability}</p>
                </div>

            </div>

            {
                !isAvailable ?
                    <button className="viewDetails" onClick={() => setShowBookingDetails(true)}>View Booking Details</button> : ""
            }


            {
                showBookingDetails ?
                    <BookingDetailsModal id={_id} setShowBookingDetails={setShowBookingDetails} /> : ""
            }

        </div>
    );
};

export default OwnedRoonCard;