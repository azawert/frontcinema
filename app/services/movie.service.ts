import { useQuery } from 'react-query'

import { IMovieEditInput } from '@/screens/admin/movie/movieedit.interface'

import { IMovie } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'
import axios from '../api/interceptors'
import { getMoviesUrl } from '../config/api.config'
import { getMovieUrl } from '../config/url.config'

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
	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
	async createMovie() {
		return axios.post(getMoviesUrl(`/create-new-movie`))
	},
	async getById(id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`${id}`))
	},
	async updateMovie(id: string, data: IMovieEditInput) {
		return axios.put(getMoviesUrl(`${id}`), data)
	},
	async getMoviesByGenres(genres: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), { genres })
	},
	async getMoviesByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getBySlug(slug: string) {
		return axios.get<IMovie>(getMovieUrl(`by-slug/${slug}`))
	},
	async updateCount(slug: string) {
		return axiosClassic.put<IMovie>(getMoviesUrl('/update-views'), { slug })
	},
}
