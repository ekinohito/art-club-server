import React from 'react';
import {useState} from "react";

const NavigationContext = React.createContext();

const useNavigation = () => React.useContext(NavigationContext);

const NavigationProvider = ({children}) => {
    const [showNav, setShowNav] = useState(false);

    return (
        <NavigationContext.Provider value={{showNav, setShowNav}}>
            {children}
        </NavigationContext.Provider>
    )
}

export {useNavigation, NavigationProvider}
