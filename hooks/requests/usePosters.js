import useSWR from "swr";

const useGetPosters = (posters) => {
    const {data, error} = useSWR('/api/data/posters', {initialData: posters});

    return {
        posters: data,
        error
    }
}

export {useGetPosters}
