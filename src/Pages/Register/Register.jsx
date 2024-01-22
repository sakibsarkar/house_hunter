import "./Register.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
    const [selectRole, setSelectRole] = useState("House Renter")
    const axios = UseAxios()



    const navigate = useNavigate()


    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const role = selectRole

        const obj = {
            name,
            email,
            password,
            role
        }

        try {
            const { data } = await axios.post("/register", obj)
            if (data.isExist) {
                toast.error("Email Already exist")
                return console.log("already exist")
            }

            await axios.post("/token", {
                email,
                password
            })

            navigate("/")

        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="register_container">
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <div>
                    <p>Your full name</p>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <p>Your Email</p>
                    <input type="text" name="email" required />
                </div>
                <div>
                    <p>Your password</p>
                    <input type="pasword" name="password" required />
                </div>
                <div>
                    <p>Your Role</p>
                    <select value={selectRole} onChange={(e) => setSelectRole(e.target.value)}>
                        <option value="House Renter">House Renter</option>
                        <option value="House Owner">House Owner</option>
                    </select>
                </div>
                <p className="authToggle">Already have account?<Link to={"/login"}>Login</Link></p>
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;