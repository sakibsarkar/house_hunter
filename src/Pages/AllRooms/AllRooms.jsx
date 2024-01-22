import "./AllRooms.css";
import RoomsCard from "../../Card/RoomsCard/RoomsCard";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const AllRooms = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchData = queryParams.get("search") || ""
    const axios = UseAxios()
    const { data = [] } = useQuery({
        queryKey: ["all house", searchData],
        queryFn: async () => {
            const { data: houseData } = await axios.get(`/all/rooms?search=${searchData}`)
            return houseData
        }
    })

    return (
        <div>
            <h1>Lets Find Your dream House</h1>
            <div className="room_container">
                {
                    data?.map(room => <RoomsCard key={room._id} room={room} />)
                }
            </div>
        </div>
    );
};

export default AllRooms;