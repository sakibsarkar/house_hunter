import "./RoomsCard.css";
import { FaHouse } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const RoomsCard = ({ room = {} }) => {
    const { _id, name, city, bedrooms, bathrooms, room_size, availability, rent_per_month, image, ownedBy } = room

    const defaultImg = image || "https://st.depositphotos.com/1000347/2412/i/450/depositphotos_24120055-stock-photo-empty-room.jpg"
    return (
        <div className="room_card">

            <div className="room_img">
                <img src={defaultImg} alt="" />
            </div>

            <div className="room_info">
                <h2>{name}</h2>

                <div className="info_row">

                    <p><b>${rent_per_month}</b></p>
                    <p><FaHouse />{room_size}Sq ft</p>
                </div>

                <div className="info_row">
                    <p><MdLocationPin />{city}</p>
                    <p><MdDateRange />{availability}</p>
                </div>

                <div className="info_row">
                    <p>Bedroom : {bedrooms}</p>
                    <p>Bathroom: {bathrooms}</p>
                </div>
            </div>

            <Link to={"/"}>View Rooms</Link>

        </div>
    );
};

export default RoomsCard;