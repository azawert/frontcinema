import { useQuery } from 'react-query'

import { IMovie } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'
import { getMoviesUrl } from '../config/api.config'

export const movieService = {
	async getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getPopularMovies() {
		return axiosClassic.get<IMovie[]>(getMoviesUrl('/popular'))
	},
}
