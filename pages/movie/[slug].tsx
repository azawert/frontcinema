import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import NotFound from '@/screens/404page/NotFound'
import SingleMovie from '@/screens/singlemovie/SingleMovie'

import { IGalleryItem } from '@/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movie.types'

import { movieService } from '@/services/movie.service'

import { getMovieUrl } from '../../app/config/url.config'

export interface IMoviePage {
	similarMovies: IGalleryItem[]
	movie: IMovie
}

const GenrePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie
			movie={movie}
			similarMovies={similarMovies || []}
			key={movie._id}
		/>
	) : (
		<NotFound />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await movieService.getMovies()
		const paths = movies.map((movie) => ({
			params: { slug: movie.slug },
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
		const { data: movie } = await movieService.getBySlug(String(params?.slug))

		const { data: dataSimilarMovies } = await movieService.getMoviesByGenres(
			movie.genres.map((genre) => String(genre._id))
		)
		const similarMovies: IGalleryItem[] = dataSimilarMovies
			.filter((similarMovie) => similarMovie._id !== movie._id)
			.map((similarMovie) => ({
				name: similarMovie.title,
				content: { title: similarMovie.title },
				posterPath: similarMovie.bigPoster,
				link: getMovieUrl(similarMovie.slug),
			}))
		return {
			props: { movie, dataSimilarMovies, similarMovies },
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
