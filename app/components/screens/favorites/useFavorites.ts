import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user.service'

export const useFavorites = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favMovies,
		refetch,
	} = useQuery('get fav movies', () => UserService.getFav(), {
		select: ({ data }) => data,
		enabled: !!user,
	})
	return { isLoading, favMovies, refetch }
}
