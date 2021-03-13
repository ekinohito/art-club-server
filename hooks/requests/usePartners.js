import useSWR from "swr";

const useGetPartners = (partners) => {
    const {data, error} = useSWR('/api/partners', {initialData: partners});

    return {
        partners: data,
        error
    }
}

export {useGetPartners}
