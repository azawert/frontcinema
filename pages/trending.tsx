import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import CatalogMovies from '@/ui/catalog movies/CatalogMovies'

import { IMovie } from '@/shared/types/movie.types'

import { movieService } from '@/services/movie.service'

const Trending: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div>
			<CatalogMovies
				title={'Trending one'}
				movies={movies}
				description={'Movies that are too good'}
			/>
		</div>
	)
}
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await movieService.getPopularMovies()
		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				movies: [],
			},
		}
	}
}

export default Trending
