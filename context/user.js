import React, {useState, useCallback, useEffect} from 'react';
import fetcher from "../fetcher";

const UserContext = React.useContext();

export const useUser = () => React.useContext(UserContext);

export const UserProvider = ({children}) => {

    return (
        <UserContext.Provider value={}>
            {children}
        </UserContext.Provider>
    )
}

const useProvideUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token)
            fetcher('/api/user/token', {
                method: "POST",

            })
    })

    const login = useCallback((username, password) => {

    }, [setUser])
}
