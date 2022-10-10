import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/SkeletonLoader'
import SubHeading from '@/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movie.types'

import { movieService } from '@/services/movie.service'

import { getMovieUrl } from '../../../../../config/url.config'
import styles from '../Admin.module.scss'

const PopularMovie: FC = () => {
	const { data, isLoading } = useQuery(
		'get most popular movie',
		() => movieService.getPopularMovies(),
		{
			select: ({ data }): IMovie => data[0],
		}
	)
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title={'The most popular movie'} />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				data && (
					<>
						<h3>Opened {data.countOpened} times</h3>
						<Link href={getMovieUrl(data.slug)}>
							<a>
								<Image
									src={data.bigPoster}
									width={285}
									height={176}
									alt={data.title}
									className={styles.image}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie
