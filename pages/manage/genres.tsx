import React from 'react'

import GenreList from '@/screens/admin/genres/GenreList'

import { NextPageAuth } from '@/shared/types/auth.types'

const Genres: NextPageAuth = () => {
	return <GenreList />
}
Genres.isOnlyAdmin = true
export default Genres
