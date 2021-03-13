import React from 'react';
import useModal from "../hooks/useModal";

const NavigationContext = React.createContext();

const useNavigation = () => React.useContext(NavigationContext);

const NavigationProvider = ({children}) => {
    const {show, closeModal, openModal} = useModal();

    return (
        <NavigationContext.Provider value={{showNav: show, openNav: openModal, closeNav: closeModal}}>
            {children}
        </NavigationContext.Provider>
    )
}

export {useNavigation, NavigationProvider}
