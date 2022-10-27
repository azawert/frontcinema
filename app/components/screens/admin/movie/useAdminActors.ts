import { useQuery } from 'react-query'

import { IOptions } from '@/ui/select/select.interface'

import { actorService } from '@/services/actor.service'
import { genreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
	const queryData = useQuery('get actors', () => actorService.getAllActors(), {
		onError: () => toastError('Error while fetching actors'),

		select: ({ data }) => {
			return data.map(
				(actor): IOptions => ({
					label: actor.name,
					value: actor._id,
				})
			)
		},
	})
	return queryData
}
