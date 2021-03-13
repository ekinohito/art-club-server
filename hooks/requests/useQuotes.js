import useSWR from "swr";

const useGetQuotes = (quotes) => {
    const {data, error} = useSWR('/api/data/quotes', {initialData: quotes});

    return {
        quotes: data,
        error
    }
}

export {useGetQuotes}
