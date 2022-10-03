import React, { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from '@/components/layout/Sidebar/moviescontainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { movieService } from '@/services/movie.service'

const PopularMovies: FC = () => {
	const { data, isSuccess, isLoading } = useQuery(
		'popular movies for sidebar',
		() => movieService.getPopularMovies()
	)
	isSuccess && console.log(data.data)
	return isLoading ? (
		<div>
			<SkeletonLoader count={3} className={'h-28 mb-4'} />
		</div>
	) : (
		<div>
			<MovieList
				link={'/trending'}
				movies={data?.data || []}
				title={'Популярные фильмы'}
			/>
		</div>
	)
}

export default PopularMovies
