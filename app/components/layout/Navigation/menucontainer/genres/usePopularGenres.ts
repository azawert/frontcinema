import {useQuery} from "react-query";

export const usePopularGenre = () => {
    const queryData = useQuery('getGenres',()=>(

        )
    )

    return queryData
}