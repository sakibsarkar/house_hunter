import "./MyBookings.css";
import BookingCard from "../../Card/BookingCard/BookingCard";
import RoomsCard from "../../Card/RoomsCard/RoomsCard";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../../Hooks & Functions/Authcontext";

const MyBookings = () => {
    const { user } = useContext(Context)

    const axios = UseAxios()
    const { data, refetch } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const { data } = await axios.post("/bookings", { ids: user?.bookedRoom })
            return data
        }
    })


    return (
        <div className="booking_container">

            <div className="myBookings">
                {
                    data?.map(room => <BookingCard key={room._id + "uniqe"} refetch={refetch} room={room} />)
                }
            </div>

        </div>
    );
};

export default MyBookings;