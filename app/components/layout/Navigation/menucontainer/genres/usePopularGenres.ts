import {useQuery} from "react-query";
import {genreService} from "@/services/genre.service";
import {IMenuItem} from "@/components/layout/Navigation/menucontainer/menu.interface";
import {getGenreUrl} from "../../../../../config/url.config";

export const usePopularGenre = () => {

    const {data,isLoading,isSuccess} = useQuery('getGenres',()=>genreService.getPopularGenres(),{
        select: ({data}) => data.map(genre=>({icon:genre.icon,link:getGenreUrl(genre.slug),title:genre.name} as IMenuItem)).splice(0,4),
        onError(error) {
            alert(error)
        }
        }
    )

    return {data,isLoading,isSuccess}
}