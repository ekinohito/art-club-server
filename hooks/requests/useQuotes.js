import useSWR from "swr";

const useGetQuotes = (quotes) => {
    const {data, mutate, error} = useSWR('/api/data/quotes', {initialData: quotes});

    return {
        quotes: data,
        mutate,
        error
    }
}

export {useGetQuotes}
