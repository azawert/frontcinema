import React, { FC } from 'react'

import ContentList from '@/screens/singlemovie/Content/ContentList/ContentList'
import FavoriteButton from '@/screens/singlemovie/FavoriteButton/FavoriteButton'

import MaterialIcon from '@/ui/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { IMovie } from '@/shared/types/movie.types'

import { getActorUrl, getGenreUrl } from '../../../../config/url.config'

import styles from './Content.module.scss'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>

			{movie.parametrs && (
				<div className={styles.details}>
					<span>{movie.parametrs.year} . </span>
					<span>{movie.parametrs.country.toUpperCase()} . </span>
					<span>{movie.parametrs.duration}min. </span>
				</div>
			)}
			<ContentList
				name={'Genres:'}
				links={movie.genres.slice(0, 3).map((g) => ({
					link: getGenreUrl(g.slug),
					_id: g._id,
					title: g.name,
				}))}
			/>
			<ContentList
				name={'Actors:'}
				links={movie.actors.map((a) => ({
					link: getActorUrl(a.slug),
					_id: a._id,
					title: a.name,
				}))}
			/>
			<div className={styles.rating}>
				<MaterialIcon name={'MdStarRate'} />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
			{user && <FavoriteButton movieId={movie._id} />}
		</div>
	)
}

export default Content
