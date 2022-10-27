import React, { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import { IHome } from '@/screens/home/home.interface'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta title={'Watch movies'} description={'Watch online movies for free'}>
			<Heading
				title={'Watch movies online!'}
				className={'text-gray-400 mb-8 text-xl'}
			/>
			{slides?.length && <Slider slides={slides} />}
			<div className={'my-10'}>
				<SubHeading title={'Trending Now'} />
				{trendingMovies ? (
					<Gallery items={trendingMovies} />
				) : (
					<div className="text-white text-center text-3xl">
						Error while getting movie list
					</div>
				)}
			</div>

			<div>
				<SubHeading title={'Best Actors'} />
				{actors ? (
					<Gallery items={actors} />
				) : (
					<div className="text-white text-center text-3xl">
						Error while getting actors list
					</div>
				)}
			</div>
		</Meta>
	)
}

export default Home
