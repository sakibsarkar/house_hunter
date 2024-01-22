import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../Hooks & Functions/Authcontext";

const OwnerPrivate = ({ children }) => {
    const { user, loading } = useContext(Context)

    if (loading) {
        return <div>loading...</div>
    }

    if (!user || !user?.email) {
        return <Navigate to={"/login"} state={location.pathname}></Navigate>
    }
    if (user?.role !== "House Owner") {
        return <Navigate to={"/"}></Navigate>

    }
    return children
};

export default OwnerPrivate;