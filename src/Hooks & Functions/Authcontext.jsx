import UseAxios from "./useAxios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null)

const Authcontext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axios = UseAxios()

    useEffect(() => {
        const unSubscribe = async () => {
            setLoading(true)
            const { data } = await axios.get("/authChange")
            setUser(data)
            setLoading(false)
        }

        unSubscribe()
        return () => unSubscribe
    }, [axios])

    const items = {
        user,
        setUser,loading
    }
    return (
        <Context.Provider value={items}>
            {children}
        </Context.Provider>
    );
};

export default Authcontext;