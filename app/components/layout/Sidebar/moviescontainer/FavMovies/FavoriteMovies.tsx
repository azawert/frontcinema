import React, { FC } from 'react'

import NotAuthFavMovies from '@/components/layout/Sidebar/moviescontainer/FavMovies/NotAuth'

import { useAuth } from '@/hooks/useAuth'

const FavoriteMovies: FC = () => {
	const { user } = useAuth()
	return <div>{user ? '' : <NotAuthFavMovies />}</div>
}

export default FavoriteMovies
