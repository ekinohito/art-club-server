import useSWR from "swr";

const useGetQuotes = () => {
    const {data, error} = useSWR('/api/quotes');

    return {
        quotes: data,
        error
    }
}

export {useGetQuotes}
