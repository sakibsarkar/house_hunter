import "./BookingCard.css";
import Swal from "sweetalert2";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useContext } from "react";
import { toast } from "sonner";
import { Context } from "../../Hooks & Functions/Authcontext";

const BookingCard = ({ room, refetch }) => {
    const { _id, name, city, bedrooms, bathrooms, room_size, availability, rent_per_month, image, description, ownedBy, ownerPhone, address, isAvailable } = room

    const { user } = useContext(Context)
    const axios = UseAxios()

    const handleCalcelBooking = () => {
        Swal.fire({
            title: "Do you want to cancel Your booking?",
            showDenyButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `No`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const toastId = toast.loading("Please wait....")

                const { data } = await axios.delete(`/cancelBooking?id=${_id}`)
                Swal.fire("Successfuly Deleted", "");
                toast.dismiss(toastId)
                refetch()
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div className="booking_card">
            <div className="booking_img">
                <img src={image} alt="" />
            </div>
            <div className="bookingInfo">
                <h2>{name}</h2>
                <p><b>Rent:</b>{rent_per_month}</p>
                <p><b>Staring date:</b>{availability}</p>
                <p><b>Owner:</b>{ownedBy}</p>
                <p><b>Owner:</b>{ownerPhone}</p>
            </div>

            <button onClick={handleCalcelBooking}>Cancel Booking</button>
        </div>
    );
};

export default BookingCard;