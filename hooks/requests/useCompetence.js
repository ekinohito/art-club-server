import useSWR from "swr";

const useGetCompetence = (competence) => {
    const {data, error} = useSWR('/api/data/competence', {initialData: competence});

    return {
        competence: data,
        error
    }
}

export {useGetCompetence}
