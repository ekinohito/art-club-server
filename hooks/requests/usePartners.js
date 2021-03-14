import useSWR from "swr";

const useGetPartners = (partners) => {
    const {data, mutate, error} = useSWR('/api/data/partners', {initialData: partners});

    return {
        partners: data,
        mutate,
        error
    }
}

export {useGetPartners}
