import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import NotFound from '@/screens/404page/NotFound'
import Genre from '@/screens/genre/Genre'
import { IGenrePage } from '@/screens/genre/genre.types'

import CatalogMovies from '@/ui/catalog movies/CatalogMovies'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { actorService } from '@/services/actor.service'
import { movieService } from '@/services/movie.service'

interface IActorPage {
	movies: IMovie[]
	actor: IActor
}

const GenrePage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? (
		<CatalogMovies movies={movies} title={actor.name} />
	) : (
		<NotFound />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await actorService.getAllActors()
		const paths = actors.map((actor) => ({
			params: { slug: actor.slug },
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
		const { data: actor } = await actorService.getBySlug(String(params?.slug))

		const { data: movies } = await movieService.getMoviesByActor(actor._id)

		return {
			props: { movies, actor },
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
