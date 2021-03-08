import useSWR from "swr";

const useGetResidents = () => {
    const {data, error} = useSWR("/api/residents");

    return {
        residents: data,
        error
    }
}

export {useGetResidents}
