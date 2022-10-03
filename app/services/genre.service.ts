import { IGenre } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'
import { getGenresUrl } from '../config/api.config'

export const genreService = {
	async getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''))
	},
}
