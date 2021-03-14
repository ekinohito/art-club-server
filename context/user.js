import React, {useState, useCallback, useEffect, useReducer} from 'react';
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

const reducer = (state, action) => {
    switch (action.type) {

    }
}

const useProvideUser = () => {
    const [state, dispatch] = useReducer();

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        if (user){
            if (!loggedIn)
                setUser(false);
            return;
        }
        fetcher('/api/user/token', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => {
                if (!res.user) return;
                setLoggedIn(true);
                setUser(res.user);
            });
    }, [loggedIn])

    const login = useCallback((username, password) => {
        fetcher('/api/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username, password})
        })
            .then(res => {
                if (res.success)
                    setLoggedIn(true);
            })
    }, [setLoggedIn]);

    const register = useCallback((username, password) => {
        fetcher('/api/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username, password})
        })
            .then(res => {
                if (res.success)
                    setLoggedIn(true);
            })
    }, [setLoggedIn]);

    const logout = useCallback(() => {
        fetcher('/api/logout', {
            method: 'POST',
            credentials: 'include',
        })
            .then(res => {
                if (res.success)
                    setLoggedIn(false);
            })
    }, [setLoggedIn])

    return {
        user,
        login,
        logout,
        register
    }
}
