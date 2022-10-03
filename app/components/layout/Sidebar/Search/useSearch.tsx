import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import useDebounce from '@/hooks/useDebounce'

import { movieService } from '@/services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { data, isSuccess, isLoading } = useQuery(
		['get movie by search', debouncedSearch],
		() => movieService.getMovies(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return { isSuccess, handleSearch, data, isLoading, searchTerm }
}
