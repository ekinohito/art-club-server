import useSWR from "swr";

const useGetResidents = (residents) => {
    const {data, error} = useSWR("/api/data/residents", {initialData: residents});

    return {
        residents: data,
        error
    }
}

export {useGetResidents}
