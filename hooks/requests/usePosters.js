import useSWR from "swr";

const useGetPosters = (posters) => {
    const {data, mutate, error} = useSWR('/api/data/posters', {initialData: posters});

    return {
        posters: data,
        mutate,
        error
    }
}

export {useGetPosters}
