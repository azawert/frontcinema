import { ICollection } from '@/screens/Collections/collections.interface'
import { IGenreEditInput } from '@/screens/admin/genre/genreedit.interface'

import { IGenre } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'
import axios from '../api/interceptors'
import { getGenresUrl } from '../config/api.config'
import { getGenreUrl } from '../config/url.config'

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
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`${_id}`))
	},
	async updateGenre(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`${_id}`), data)
	},
	async createGenre() {
		return axios.post(getGenresUrl('/create'))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenreUrl(`by-slug/${slug}`))
	},
	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	},
}
