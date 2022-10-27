import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { getMovieUrl } from '../../../../../config/url.config'
import { IMovie } from '../../../../../shared/types/movie.types'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length > 0 ? (
				movies.map((movie) => (
					<Link
						href={getMovieUrl(movie.slug)}
						key={movie._id}
						className={'mb-10'}
					>
						<a>
							<Image
								src={movie.poster}
								alt={movie.title}
								width={50}
								height={50}
								objectFit={'cover'}
								objectPosition={'top'}
								draggable={false}
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className={'text-white text-center my-4'}>
					Фильмы не найдены...
				</div>
			)}
		</div>
	)
}

export default SearchList
