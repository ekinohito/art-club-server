import React, {useState} from 'react';
import useModal from "../hooks/useModal";
import PosterDescription from "../components/poster_description";

const PosterDescriptionContext = React.createContext();

export const usePosterDescription = () => React.useContext(PosterDescriptionContext);

export const PosterDescriptionProvider = ({children}) => {
    const {show, closeModal, openModal} = useModal();
    const [poster, setPoster] = useState({});

    return (
        <PosterDescriptionContext.Provider
            value = {{
                show, closePD: closeModal, openPD: openModal, setPoster, poster
            }}
        >
            {children}
            <PosterDescription/>
        </PosterDescriptionContext.Provider>
    )

}

