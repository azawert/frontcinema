import React, { FC } from 'react'

import FavoriteItem from '@/screens/favorites/FavoriteItem'
import { useFavorites } from '@/screens/favorites/useFavorites'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favMovies, isLoading } = useFavorites()
	return (
		<Meta title={'Favorites Movies'} description={'Favorites movies'}>
			<Heading title={'Favorites Movies'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favMovies?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
