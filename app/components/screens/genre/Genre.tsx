import React, { FC } from 'react'

import { IGenrePage } from '@/screens/genre/genre.types'

import CatalogMovies from '@/ui/catalog movies/CatalogMovies'

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	return (
		<CatalogMovies
			title={genre.name}
			movies={movies}
			description={genre.description}
		/>
	)
}

export default Genre
