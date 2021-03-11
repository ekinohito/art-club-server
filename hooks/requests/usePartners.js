import useSWR from "swr";

const useGetPartners = () => {
    const {data, error} = useSWR('/api/partners');

    return {
        partners: data,
        error
    }
}

export {useGetPartners}
