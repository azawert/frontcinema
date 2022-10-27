import dynamic, { noSSR } from 'next/dynamic'
import React, { FC, useEffect, useState } from 'react'

import Content from '@/screens/singlemovie/Content/Content'
import { useCountOpened } from '@/screens/singlemovie/useCountOpened'

import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import SubHeading from '@/ui/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

const DynamicPlayer = dynamic(() => import('@/ui/videoplayer/VideoPlayer'), {
	ssr: false,
})
const DynamicRating = dynamic(
	() => import('@/components/screens/singlemovie/RateMovie/RateMovie'),
	{
		ssr: false,
	}
)

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useCountOpened(movie.slug)
	const [isOpened, setIsOpened] = useState(false)

	return (
		<Meta
			key={movie._id}
			title={movie.title}
			description={`Watch ${movie.title} for free without any ads`}
		>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>
			<DynamicPlayer slug={movie.slug} videoSrc={movie.videoUrl} />

			<div className={'mt-12'}>
				<SubHeading title={'Similar Movies'} />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRating movieId={movie._id} slug={movie.slug} key={movie._id} />
		</Meta>
	)
}

export default SingleMovie
