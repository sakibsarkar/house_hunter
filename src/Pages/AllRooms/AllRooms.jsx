import "react-range-slider-input/dist/style.css";
import "./AllRooms.css";
import RangeSlider from "react-range-slider-input";
import RoomsCard from "../../Card/RoomsCard/RoomsCard";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { formateDate } from "../../Hooks & Functions/dateFormater";

const AllRooms = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchData = queryParams.get("search") || ""
    const axios = UseAxios()


    const dateRef = useRef(null)
    const cityRef = useRef(null)
    const bedroomRef = useRef(null)
    const bathroomRef = useRef(null)
    const room_sizeRef = useRef(null)

    const [availability, setAvailability] = useState("")
    const [priceRange, setPriceRange] = useState([0, 4000])
    const [bedrooms, setBedroom] = useState("")
    const [bathrooms, setBathrooms] = useState("")
    const [city, setCity] = useState("")
    const [room_size, setroom_size] = useState("")

    const { data = [] } = useQuery({
        queryKey: ["all house", searchData, availability, priceRange, city, bedrooms, bathrooms, room_size],
        queryFn: async () => {
            const { data: houseData } = await axios.get(`/all/rooms?search=${searchData}&&availability=${availability}&&price_range=${priceRange[0]}@${priceRange[1]}&&city=${city}&&bedrooms=${bedrooms}&&bathrooms=${bathrooms}&&room_size=${room_size}`)
            return houseData
        }
    })


    const handleDatechange = (e) => {
        const date = formateDate(e.target.value)
        setAvailability(date)
    }

    const clearDate = () => {
        setAvailability("")
        dateRef.current.value = ""
    }

    const handlePriceRange = (priceArr) => {
        setPriceRange(priceArr)
    }

    const cityFind = () => {
        const value = cityRef.current.value
        setCity(value)
    }

    const bedroomFind = () => {
        setBedroom(bedroomRef.current.value)
    }

    const bathroomFind = () => {
        setBathrooms(bathroomRef.current.value)
    }


    const roomSizeFind = () => {
        setroom_size(room_sizeRef.current.value)
    }

    return (
        <div>
            <h1>Lets Find Your dream House</h1>
            <div className="room_wrapper">

                <div className="filterBar">

                    <div className="filterOption">
                        <input type="date" onChange={handleDatechange} ref={dateRef} />
                        <button onClick={clearDate}>Clear Date</button>
                    </div>
                    <div className="filterOption">
                        <p>Price ${priceRange[0]} - {priceRange[1]}</p>
                        <RangeSlider onInput={handlePriceRange} max={5000} defaultValue={[0, 4000]} />
                    </div>
                    <div className="filterOption">
                        <p>City</p>
                        <div>
                            <input type="text" ref={cityRef} /> <button onClick={cityFind}>Find</button>
                        </div>
                    </div>
                    <div className="filterOption">
                        <div className="row">
                            <p>Bedroom</p><input type="number" ref={bedroomRef} /><button onClick={bedroomFind}>Find</button>
                        </div>
                        <div className="row">
                            <p>Bathroom</p><input type="number" ref={bathroomRef} /><button onClick={bathroomFind}>Find</button>
                        </div>
                    </div>
                    <div className="filterOption">
                        <div className="row">
                            <p>Room Size</p><input type="number" ref={room_sizeRef} /><button onClick={roomSizeFind}>Find</button>
                        </div>

                    </div>
                </div>

                <div className="room_container">
                    {
                        data?.map(room => <RoomsCard key={room._id} room={room} />)
                    }
                </div>

            </div>

        </div>
    );
};

export default AllRooms;