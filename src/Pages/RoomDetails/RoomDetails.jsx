import "./RoomDetails.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const RoomDetails = () => {
    const { id } = useParams()
    const axios = UseAxios()
    const navigate = useNavigate()

    const { data = {} } = useQuery({
        queryKey: ["room details"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/room/${id}`)
            return result
        }
    })

    const { _id, name, city, bedrooms, bathrooms, room_size, availability, rent_per_month, image, description, ownedBy, ownerPhone, address, isAvailable } = data


    const handleBook = async () => {
        const toastId = toast.loading("Please wait...")
        const { data } = await axios.post(`/room/book?room_id=${id}`)
        if (data?.limit) {
            return toast.error("You reached your booking limit")
        }
        navigate("/")
        toast.dismiss(toastId)
        toast.success("Successful")
    }

    return (
        <div className="room_details">
            <div className="room_big">
                <div className="room_big_img">
                    <img src={image} alt="" />
                </div>

                <div className="room_details_info">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="row">
                        <div className="col">
                            <p><b>Price:</b>${rent_per_month}</p>
                            <p><b>City:</b>${city}</p>
                            <p><b>Room Size:</b>{room_size}Sq Ft</p>
                            <p><b>Bedroom:</b>{bedrooms}</p>
                            <p><b>Bathroom:</b>{bathrooms}</p>
                            <p><b>Availability</b>{availability}</p>
                        </div>

                        <div className="col">
                            <h3>Owner info</h3>
                            <p><b>Owner: </b>{ownedBy}</p>
                            <p><b>Owner: </b>{ownerPhone}</p>
                            <p><b>Address: </b>{address}</p>
                        </div>
                    </div>

                </div>

                <button onClick={handleBook}>Book Room</button>
            </div>
        </div>
    );
};

export default RoomDetails;
