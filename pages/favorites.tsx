import React from 'react'

import Favorites from '@/screens/favorites/Favorites'

import { NextPageAuth } from '@/shared/types/auth.types'

const FavoritesPage: NextPageAuth = () => {
	FavoritesPage.isOnlyUser = true
	return <Favorites />
}

export default FavoritesPage
