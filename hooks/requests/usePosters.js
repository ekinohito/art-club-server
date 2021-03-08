import useSWR from "swr";

const useGetPosters = () => {
    const {data, error} = useSWR('/api/posters');

    return {
        posters: data,
        error
    }
}

export {useGetPosters}
