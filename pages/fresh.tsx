import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import CatalogMovies from '@/ui/catalog movies/CatalogMovies'

import { IMovie } from '@/shared/types/movie.types'

import { movieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div>
			<CatalogMovies
				title={'Fresh movies'}
				movies={movies || []}
				description={
					'New movies and series in excellent quality: legal,safe,without ads'
				}
			/>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await movieService.getMovies()
		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
