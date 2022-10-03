import React from 'react'

import Menu from '@/components/layout/Navigation/menucontainer/Menu'
import { usePopularGenre } from '@/components/layout/Navigation/menucontainer/genres/usePopularGenres'

import SkeletonLoader from '@/ui/SkeletonLoader'

const GenreMenu = () => {
	const { isLoading, data, isSuccess } = usePopularGenre()
	return (
		<div>
			{isLoading ? (
				<div className="mx-11 mb-6">
					<SkeletonLoader count={5} className={'h-7 mt-6'} />
				</div>
			) : (
				<Menu menu={{ title: 'Popular genres', items: data || [] }} />
			)}
		</div>
	)
}

export default GenreMenu
