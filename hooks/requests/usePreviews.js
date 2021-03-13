import useSWR from "swr";

const useGetPreviews = (previews) => {
    const {data, error} = useSWR('/api/previews', {initialData: previews});

    return {
        previews: data,
        error
    }
}

export {useGetPreviews}
