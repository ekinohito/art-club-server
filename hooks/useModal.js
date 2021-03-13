import {useState, useCallback} from "react";

export default function useModal() {
    const [show, setShow] = useState(false);

    const closeModal = useCallback(() => {
        setShow(false);
    }, [setShow]);
    const openModal = useCallback(() => {
        setShow(true);
    }, [setShow]);

    return {
        show,
        closeModal,
        openModal
    }
}