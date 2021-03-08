import useSWR from "swr";

const useGetCompetence = () => {
    const {data, error} = useSWR('/api/competence');

    return {
        competence: data,
        error
    }
}

export {useGetCompetence}
