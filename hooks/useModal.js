import {useState} from "react";
import {useEffect} from "react";

export default function useModal() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log(show)
    }, [show])

    return {
        show,
        closeModal: () => setShow(false),
        openModal: () => setShow(true)
    }
}