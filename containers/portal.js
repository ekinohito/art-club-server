import React, {useEffect} from 'react';
import ReactDOM from 'react-dom'

export default function Portal({ children }) {
    let modalRoot = document.getElementById("modal");

    if (!modalRoot) {
        modalRoot = document.createElement("div");
        modalRoot.setAttribute("id", "modal");
        document.body.appendChild(modalRoot);
    }

    const modalElement = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(modalElement);
        return () => modalRoot.removeChild(modalElement);
    });

    return ReactDOM.createPortal(children, modalElement);
};