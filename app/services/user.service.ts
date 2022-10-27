import axios from 'api/interceptors'

import { IProfileInput } from '@/screens/profile/profile.interface'

import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.interface'

import { getUsersUrl } from '../config/api.config'

export const UserService = {
	async getAllUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl(`/profile`))
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/profile`), data)
	},
	async getUserById(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},
	async update(_id: string, data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/${_id}`), data)
	},
	async getFav() {
		return axios.get<IMovie[]>(getUsersUrl(`/profile/favorites`))
	},
	async addToFav(movieId: string) {
		return axios.post(getUsersUrl(`/profile/favorites`), { movieId })
	},
}
