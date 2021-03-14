import useSWR from "swr";

const useGetCompetence = (competence) => {
    const {data, mutate, error} = useSWR('/api/data/competence', {initialData: competence});

    return {
        competence: data,
        mutate,
        error
    }
}

export {useGetCompetence}
