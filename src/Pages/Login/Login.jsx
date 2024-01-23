import "./Login.css";
import UseAxios from "../../Hooks & Functions/useAxios";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Context } from "../../Hooks & Functions/Authcontext";

const Login = () => {
    const axios = UseAxios()
    const navigate = useNavigate()

    const { setUser } = useContext(Context)


    const handleLogin = async (e) => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const toastId = toast.loading("Please wait...")
        const { data } = await axios.post("/login", { email, password })

        if (data?.matched === false) {
            toast.dismiss(toastId)
            return toast.error("Password didn't matched")
        }

        if (data?.found === false) {
            toast.dismiss(toastId)
            return toast.error("Invalid email")
        }

        await axios.post("/token", { email, password })
        const address = data?.role === "House Owner" ? "/dashboard/my_rooms" : "/dashboard/my_booking"
        navigate(address)
        toast.dismiss(toastId)
        toast.success("Successfuly loged in")
        setUser(data)
    }
    return (
        <div className="loging_wrapper">

            <div className="login_box">
                <form onSubmit={handleLogin}>
                    <div>
                        <p>Email</p>
                        <input type="email" name="email" required />
                    </div>
                    <div>
                        <p>password</p>
                        <input type="password" name="password" required />
                    </div>
                    <button>Login</button>
                </form>
                <div className="login_photo">
                    <img src="https://i.ibb.co/0yffwPf/go-high.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Login;