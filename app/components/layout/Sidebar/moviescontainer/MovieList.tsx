import Link from 'next/link'
import React, { FC } from 'react'

import MovieItem from '@/components/layout/Sidebar/moviescontainer/MovieItem'
import { IMovieList } from '@/components/layout/Sidebar/moviescontainer/movielist.interface'

import styles from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ movies, title, link }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.link}>Увидеть больше</a>
			</Link>
		</div>
	)
}

export default MovieList
