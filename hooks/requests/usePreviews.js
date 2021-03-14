import useSWR from "swr";

const useGetPreviews = (previews) => {
    const {data, mutate, error} = useSWR('/api/data/previews', {initialData: previews});

    return {
        previews: data,
        mutate,
        error
    }
}

export {useGetPreviews}
