import React, { FC } from 'react'

import { ICatalog } from '@/ui/catalog movies/catalog.interface'
import GalleryItem from '@/ui/gallery/GalleryItem'
import Description from '@/ui/heading/Description'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { getMovieUrl } from '../../../config/url.config'

import styles from './CatalogMovies.module.scss'

const MoviesCatalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} />
			{description && (
				<Description description={description} className={styles.description} />
			)}
			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title,
							},
						}}
						variant={'horizontal'}
						key={movie._id}
					/>
				))}
			</section>
		</Meta>
	)
}

export default MoviesCatalog
