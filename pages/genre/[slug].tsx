// import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import NotFound from '@/screens/404page/NotFound'
import { useActors } from '@/screens/admin/actors/useActors'
import Genre from '@/screens/genre/Genre'
import { IGenrePage } from '@/screens/genre/genre.types'

import { genreService } from '@/services/genre.service'
import { movieService } from '@/services/movie.service'

const GenrePage: NextPage<IGenrePage> = ({ genre, movies }) => {
	return genre ? <Genre genre={genre} movies={movies} /> : <NotFound />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await genreService.getAllGenres()
		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await genreService.getBySlug(String(params?.slug))

		const { data: movies } = await movieService.getMoviesByGenres([genre._id])

		return {
			props: { movies, genre },
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenrePage
