import UseAxios from "./useAxios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null)

const Authcontext = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const axios = UseAxios()

    useEffect(() => {

        setLoading(true)
        axios.get("/authChange")
            .then(({ data }) => {
                setUser(data)
                setLoading(false)
            })



    }, [axios])

    const items = {
        user,
        setUser, loading
    }
    return (
        <Context.Provider value={items}>
            {children}
        </Context.Provider>
    );
};

export default Authcontext;