import { IActor } from '@/shared/types/movie.types'

import { axiosClassic } from '../api/interceptors'
import axios from '../api/interceptors'
import { getActorsUrl } from '../config/api.config'

export const actorService = {
	async getAllActors(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`${_id}`))
	},
}
