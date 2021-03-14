import useSWR from "swr";

const useGetResidents = (residents) => {
    const {data, mutate, error} = useSWR("/api/data/residents", {initialData: residents});

    return {
        residents: data,
        mutate,
        error
    }
}

export {useGetResidents}
