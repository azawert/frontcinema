import cn from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useFavorites } from '@/screens/favorites/useFavorites'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import styles from './FavoriteButton.module.scss'
import heartImage from './heart-animation.png'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isPressed, setIsPressed] = useState(false)
	const { favMovies, refetch } = useFavorites()
	useEffect(() => {
		if (!favMovies) return
		const isMovieInFav = favMovies.some((fav) => fav._id === movieId)
		if (isPressed !== isMovieInFav) setIsPressed(isMovieInFav)
	}, [setIsPressed, isPressed, movieId, favMovies])
	const { user } = useAuth()
	const { mutateAsync } = useMutation(
		'add to fav',
		() => UserService.addToFav(movieId),
		{
			onSuccess: () => {
				toastr.success('Фильм был успешно добавлен в избранное', '')
				setIsPressed(!isPressed)
				refetch()
			},
			onError: (e) => {
				toastError(e, 'Ошибка с добавлением фильма в избранное')
			},
		}
	)
	return (
		<button
			onClick={
				user
					? () => mutateAsync()
					: () => {
							toastError('Авторизируйтесь, чтобы добавить фильм в избранное!')
					  }
			}
			className={cn(styles.button, {
				[styles.animate]: isPressed,
			})}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		></button>
	)
}

export default FavoriteButton
