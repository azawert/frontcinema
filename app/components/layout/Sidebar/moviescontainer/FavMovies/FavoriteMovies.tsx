import React, { FC } from 'react'

import { useFavorites } from '@/screens/favorites/useFavorites'

import NotAuthFavMovies from '@/components/layout/Sidebar/moviescontainer/FavMovies/NotAuth'
import MovieList from '@/components/layout/Sidebar/moviescontainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

const FavoriteMovies: FC = () => {
	const { user } = useAuth()
	const { isLoading, favMovies } = useFavorites()
	if (!user) return <NotAuthFavMovies />
	return isLoading ? (
		<div className={'mt-11'}>
			<SkeletonLoader count={3} className={'h-28 mb-4'} />
		</div>
	) : (
		<MovieList
			movies={favMovies?.slice(0, 3) || []}
			title={'Favorite movies'}
			link={'/favorites'}
		/>
	)
}

export default FavoriteMovies
