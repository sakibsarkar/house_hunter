import "./BookingDetailsModal.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";
import { RxCross2 } from "react-icons/rx";

const BookingDetailsModal = ({ id, setShowBookingDetails }) => {
    const axios = UseAxios()
    const { data = {} } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const { data: result } = await axios.get(`/owner/booking_details?room_id=${id}`)
            return result
        }
    })

    const { _id, renter_name, renter_email, renter_phone, room_id, owner_email } = data
    return (
        <div className="booking_details">
            <div className="detail_box">
                <div className="cancel" onClick={() => setShowBookingDetails(false)}>
                    <RxCross2 />
                </div>
                <p><b>Rented by:</b>{renter_name}</p>
                <p><b>Renter Phone :</b>{renter_phone}</p>
                <p><b>Renter Email :</b>{renter_email}</p>
            </div>
        </div>
    );
};

export default BookingDetailsModal;