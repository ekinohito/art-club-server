import useSWR from "swr";

const useGetPartners = (partners) => {
    const {data, error} = useSWR('/api/data/partners', {initialData: partners});

    return {
        partners: data,
        error
    }
}

export {useGetPartners}
