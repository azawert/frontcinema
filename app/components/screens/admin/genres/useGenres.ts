import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admintable/adminTable/admintable.interface'

import useDebounce from '@/hooks/useDebounce'

import { genreService } from '@/services/genre.service'

import { getAdminUrl } from '../../../../config/url.config'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['genre list', debouncedSearch],
		() => genreService.getAllGenres(debouncedSearch),
		{
			select: ({ data }) =>
				data &&
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError: (err) => {
				toastr.error('error happened', 'GenreList')
			},
			onSuccess: (data) => {
				console.log(data)
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(GenreId: string) => genreService.deleteGenre(GenreId),
		{
			onError: () => {
				toastr.error('error while deleting user', 'error')
			},
			onSuccess: () => {
				toastr.success('User deleted', 'delete was successful')
				queryData.refetch()
			},
		}
	)
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,

			setSearchTerm,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
