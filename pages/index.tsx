import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { IGalleryItem } from '@/ui/gallery/gallery.interface'
import { ISlide } from '@/ui/slider/slider.interface'

import { actorService } from '@/services/actor.service'
import { movieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenreListEach'

import { getActorUrl, getMovieUrl } from '../app/config/url.config'

const HomePage: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data } = await movieService.getMovies()

		const slides: ISlide[] = data.slice(0, 3).map((movie) => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			bigPoster: movie.bigPoster,
			subTitle: getGenresList(movie.genres),
			title: movie.title,
		}))
		const { data: actorsData } = await actorService.getAllActors()
		const actors: IGalleryItem[] = actorsData.slice(0, 7).map((actor) => ({
			name: actor.name,
			link: getActorUrl(actor.slug),
			posterPath: actor.photo,
			content: {
				title: actor.name,
				subTitle: `+${actor.countMovies} movies`,
			},
		}))

		const { data: popularMovies } = await movieService.getPopularMovies()
		const trendingMovies: IGalleryItem[] = popularMovies
			.slice(0, 5)
			.map((movie) => ({
				name: movie.title,
				link: getMovieUrl(movie.slug),
				posterPath: movie.bigPoster,
				content: {
					title: movie.title,
				},
			}))
		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			},
		}
	}
}

export default HomePage
