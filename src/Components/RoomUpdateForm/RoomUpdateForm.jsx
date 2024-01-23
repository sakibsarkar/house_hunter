import "./RoomUpdateForm.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
import { formateDate, inputDateFormater } from "../../Hooks & Functions/dateFormater";

const RoomUpdateForm = ({ room_data, refetch, setShowUpdateForm }) => {

    const { _id, name, city, bedrooms, bathrooms, room_size, availability, rent_per_month, image, description, ownedBy, ownerPhone, address, isAvailable } = room_data

    const inputDate = inputDateFormater(availability)
    const axios = UseAxios()
    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const address = form.address.value
        let city = form.city.value
        const room_size = form.room_size.value
        const bedrooms = form.bedrooms.value
        const bathrooms = form.bathrooms.value
        const date = formateDate(form.date.value)
        const rent = form.rent.value
        const description = form.description.value





        const tostId = toast.loading("Please wait")

        const obj = {
            name,
            city: city.toLowerCase(),
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            room_size: parseInt(room_size),
            availability: date,
            rent_per_month: parseInt(rent),
            description,
            address
        }

        const { data: uploadData } = await axios.put(`/room_update?id=${_id}`, obj)
        console.log(uploadData);
        toast.dismiss(tostId)
        setShowUpdateForm(false)
        refetch()
        toast.success("Successfly added your room")


    }

    return (

        <div className="add_room_form">
            <form onSubmit={handleUpdate} >
                <div className="cross" onClick={() => setShowUpdateForm(false)}>
                    <RxCross2 />
                </div>

                <div>
                    <p>Room Name</p>
                    <input type="text" className="name" defaultValue={name} required name="name" />
                </div>

                <div>
                    <p>Address</p>
                    <input type="text" name="address" defaultValue={address} required />
                </div>

                <div>
                    <p>City</p>
                    <input type="text" name="city" required defaultValue={city} />
                </div>
                <div className="bro">
                    <div>
                        <p>Room Size</p>
                        <input type="number" name="room_size" defaultValue={room_size} required />
                    </div>
                    <div>
                        <p>Bedrooms</p>
                        <input type="number" name="bedrooms" defaultValue={bedrooms} required />
                    </div>

                    <div>
                        <p>Bathrooms</p>
                        <input type="number" name="bathrooms" required defaultValue={bathrooms} />
                    </div>
                </div>

                <div className="bro">
                    <div>
                        <p>Monthly Rent</p>
                        <input type="number" name="rent" required defaultValue={rent_per_month} />
                    </div>
                    <div>
                        <p>Availablity Date</p>
                        <input type="date" name="date" required defaultValue={inputDate} />
                    </div>
                </div>


                <div>
                    <p>Description</p>
                    <textarea name="description" required defaultValue={description} />
                </div>
                <button>Add room</button>

            </form>
        </div>

    );
};

export default RoomUpdateForm;