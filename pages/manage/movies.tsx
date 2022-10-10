import React from 'react'

import MovieList from '@/screens/admin/movies/MovieList'

import { NextPageAuth } from '@/shared/types/auth.types'

const Movies: NextPageAuth = () => {
	return <MovieList />
}
Movies.isOnlyAdmin = true
export default Movies
