import "./BookingDetails.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";

const BookingDetails = () => {
    const axios = UseAxios()
    const { data } = useQuery({
        queryKey: ["bookingDetails"],
        queryFn: async (req, res) => {
            const { data: result } = await axios.get("/booking_details")
            return result
        }
    })


    return (
        <div className="boking_details">
            <table>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Room id</th>
                        <th>Booking Name</th>
                        <th>Booking Email</th>
                        <th>phone Number</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data?.map((item, index) => <tr
                            key={index}>
                            <td>{index + 1}</td>
                            <td>{item.room_id}</td>
                            <td>{item.renter_name}</td>
                            <td>{item.renter_email}</td>
                            <td>{item.renter_phone}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookingDetails;