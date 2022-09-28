import {getGenresUrl} from "../config/api.config";
import {IGenre} from "@/shared/types/movie.types";
import axios from "axios";
import {axiosClassic} from "../api/interceptors";

export const genreService = {
    async getPopularGenres(){
        return axiosClassic.get<IGenre[]>(getGenresUrl(''))
    }
}