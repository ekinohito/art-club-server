import {useState} from "react";

export default function useModal() {
    const [show, setShow] = useState(false);

    return {
        show,
        closeModal: () => setShow(false),
        openModal: () => setShow(true)
    }
}