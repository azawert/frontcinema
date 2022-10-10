import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admintable/adminTable/admintable.interface'

import useDebounce from '@/hooks/useDebounce'

import { movieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenreListEach'

import { getAdminUrl } from '../../../../config/url.config'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['movie list', debouncedSearch],
		() => movieService.getMovies(debouncedSearch),
		{
			select: ({ data }) =>
				data &&
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
						],
					})
				),
			onError: (err) => {
				toastr.error('error happened', 'UserList')
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
		'delete movie',
		(movieId: string) => movieService.deleteMovie(movieId),
		{
			onError: () => {
				toastr.error('error while deleting movie', 'error')
			},
			onSuccess: () => {
				toastr.success('Movie deleted', 'delete was successful')
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
