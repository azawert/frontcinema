import {getGenresUrl} from "../config/api.config";

export const genreService = {
    async getPopularGenres(limit =4){
        return axios.get<IGenre[]>(getGenresUrl('/popular'), {
            params:{
                limit
            }
        })
    }
}