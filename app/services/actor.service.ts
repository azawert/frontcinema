import { IActorEditInput } from '@/screens/admin/actor/actoredit.interface'

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
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
	async createActor() {
		return axios.post(getActorsUrl(`/create`))
	},
	async getById(id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`${id}`))
	},
	async update(id: string, data: IActorEditInput) {
		return axios.put(getActorsUrl(`${id}`), data)
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
}
