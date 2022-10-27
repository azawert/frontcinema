import { useQuery } from 'react-query'

import { IOptions } from '@/ui/select/select.interface'

import { genreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

export const useAdminGenre = () => {
	const queryData = useQuery('get genres', () => genreService.getAllGenres(), {
		select: ({ data }) => {
			return data.map(
				(genre): IOptions => ({
					label: genre.name,
					value: genre._id,
				})
			)
		},
		onSuccess: (data) => console.log(data),
		onError: () => toastError('Error while fetching genres'),
	})
	console.log(queryData.data)
	return queryData
}
