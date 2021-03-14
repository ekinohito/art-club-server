import React, {useState, useCallback, useEffect} from 'react';
import fetcher from "../fetcher";


const UserContext = React.createContext();

export const useUser = () => React.useContext(UserContext);

export const UserProvider = ({children}) => {
    const provideUser = useProvideUser();

    return (
        <UserContext.Provider value={provideUser}>
            {children}
        </UserContext.Provider>
    )
}

const useProvideUser = () => {
    const [user, setUser] = useState(null);

    const getUser = useCallback(() => {
        fetcher('/api/user/token', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => {
                if (!res.user) return;
                setUser(res.user);
            });
    }, []);

    useEffect(() => {
        if (!user)
            getUser()
    }, [])

    const login = useCallback((username, password) => {
        fetcher('/api/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username, password})
        })
            .then(res => {
                if (res.success)
                    getUser();
            })
    }, []);

    const register = useCallback((username, password) => {
        fetcher('/api/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username, password})
        })
            .then(res => {
                if (res.success)
                    getUser();
            })
    }, []);

    const logout = useCallback(() => {
        fetcher('/api/logout', {
            method: 'POST',
            credentials: 'include',
        })
            .then(res => {
                if (res.success)
                    setUser(null)
            })
    }, [])

    return {
        user,
        login,
        logout,
        register
    }
}
