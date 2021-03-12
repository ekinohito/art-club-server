import useSWR from "swr";

const useGetPreviews = () => {
    const {data, error} = useSWR('/api/previews');

    return {
        previews: data,
        error
    }
}

export {useGetPreviews}
