import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenreListEach } from '@/utils/movie/getGenreListEach'

import { getGenreUrl, getMovieUrl } from '../../../../config/url.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						alt={movie.title}
						src={movie.poster}
						draggable={false}
						width={65}
						height={97}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, index) => (
						<Link href={getGenreUrl(genre.slug)} key={genre._id}>
							<a>{getGenreListEach(index, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>
				<div className={styles.rating}>
					<MaterialIcon name={'MdStarRate'} />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
