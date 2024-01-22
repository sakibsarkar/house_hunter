import "./MyRooms.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useContext } from "react";
import { toast } from "sonner";
import { Context } from "../../Hooks & Functions/Authcontext";
import { formateDate } from "../../Hooks & Functions/dateFormater";
import { uploadImg } from "../../Hooks & Functions/uploadImg";

const MyRooms = () => {
    const { user } = useContext(Context)
    const axios = UseAxios()


    const handleAddProduct = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const address = form.address.value
        let city = form.city.value
        const roomPhoto = form.photo.files[0]
        const room_size = form.room_size.value
        const bedrooms = form.bedrooms.value
        const bathrooms = form.bathrooms.value
        const date = formateDate(form.date.value)
        const phone = form.number.value
        const rent = form.rent.value
        const description = form.description.value


        const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

        if (!bdPhoneNumberRegex.test(`+880${phone}`)) {
            return toast.error("Invalid phone Number")
        }

        const tostId = toast.loading("Please wait")
        const { data } = await uploadImg(roomPhoto)
        const photoURl = data?.display_url

        const obj = {
            name,
            city: city.toLowerCase(),
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            room_size: parseInt(room_size),
            availability: date,
            rent_per_month: parseInt(rent),
            image: photoURl,
            description,
            ownedBy: user?.email,
            ownerPhone: `+880${phone}`,
            address,
            isAvailable: true
        }

        const { data: uploadData } = await axios.post("/add_room", obj)
        console.log(uploadData);
        toast.dismiss(tostId)
        toast.success("Successfly added your room")


    }

    return (
        <div className="my_rooms_container">
            <div className="add_room_form">
                <form onSubmit={handleAddProduct} >
                    <div>
                        <p>Room Name</p>
                        <input type="text" className="name" required name="name" />
                    </div>

                    <div>
                        <p>Address</p>
                        <input type="text" name="address" required />
                    </div>

                    <div>
                        <p>City</p>
                        <input type="text" name="city" required />
                    </div>
                    <div>
                        <input type="file" accept="image/*" name="photo" className="photoBox" required />
                    </div>
                    <div className="bro">
                        <div>
                            <p>Room Size</p>
                            <input type="number" name="room_size" required />
                        </div>
                        <div>
                            <p>Bedrooms</p>
                            <input type="number" name="bedrooms" required />
                        </div>

                        <div>
                            <p>Bathrooms</p>
                            <input type="number" name="bathrooms" required />
                        </div>
                    </div>

                    <div className="bro">
                        <div>
                            <p>Monthly Rent</p>
                            <input type="number" name="rent" required />
                        </div>
                        <div>
                            <p>Availablity Date</p>
                            <input type="date" name="date" required />
                        </div>
                    </div>

                    <div>
                        <p>Phone number</p>
                        <div className="row">
                            <p>+880</p>
                            <input type="number" name="number" required />
                        </div>
                    </div>
                    <div>
                        <p>Description</p>
                        <textarea name="description" required />
                    </div>
                    <button>Add room</button>

                </form>
            </div>
        </div >
    );
};

export default MyRooms;