import { IGenre } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'
import axios from '../api/interceptors'
import { getGenresUrl } from '../config/api.config'

export const genreService = {
	async getAllGenres(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`${_id}`))
	},
}
