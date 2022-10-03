import React, { FC } from 'react'

import FavoriteMovies from '@/components/layout/Sidebar/moviescontainer/FavMovies/FavoriteMovies'
import PopularMovies from '@/components/layout/Sidebar/moviescontainer/PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
