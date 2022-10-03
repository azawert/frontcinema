import React, { FC } from 'react'

import NotAuthFavMovies from '@/components/layout/Sidebar/moviescontainer/FavMovies/NotAuth'

const FavoriteMovies: FC = () => {
	const isAuth = false
	return <div>{isAuth ? '' : <NotAuthFavMovies />}</div>
}

export default FavoriteMovies
