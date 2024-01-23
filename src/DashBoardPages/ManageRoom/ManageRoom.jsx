import "./ManageRoom.css";
import RoomUpdateForm from "../../Components/RoomUpdateForm/RoomUpdateForm";
import Swal from "sweetalert2";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const ManageRoom = () => {
    const [showUpdateForm, setShowUpdateForm] = useState()
    const axios = UseAxios()
    const { data, refetch } = useQuery({
        queryKey: ["asset_manage"],
        queryFn: async () => {
            const { data: result } = await axios.get("/owner_rooms")
            return result
        }
    })


    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to Delete?",
            showDenyButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `No`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const toastId = toast.loading("Please wait....")

                const { data } = await axios.delete(`/room_delete?id=${id}`)
                Swal.fire("Successfuly Deleted", "", "info");
                toast.dismiss(toastId)
                refetch()
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });


    }

    return (
        <div className="asset_manager">
            <h1>Manage your room</h1>

            <div className="assets_table">
                <table>
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>Bedroom</th>
                            <th>Bathroom</th>
                            <th>Rent</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.map((item, index) => <tr
                                key={index}>
                                {
                                    showUpdateForm === item._id ?
                                        <RoomUpdateForm room_data={item} refetch={refetch} setShowUpdateForm={setShowUpdateForm} />
                                        :
                                        ""
                                }
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.bedrooms}</td>
                                <td>{item.bathrooms}</td>
                                <td>${item.rent_per_month}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)}>Del</button>
                                    <button onClick={() => setShowUpdateForm(item._id)}>Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageRoom;