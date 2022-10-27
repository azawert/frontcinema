import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ratingService } from '@/services/rating.service'

import { toastError } from '@/utils/toast-error'

import { useAuth } from '../../../../hooks/useAuth'

export const useRate = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)
	const { user } = useAuth()
	const { refetch } = useQuery(
		['movie rating', movieId],
		() => ratingService.getByUserMovie(movieId),
		{
			onError() {
				toastError('Ошибка с получением рейтинга фильма')
			},
			onSuccess: ({ data }) => {
				setRating(data)
			},
			enabled: !!movieId && !!user,
		}
	)
	const { mutateAsync: updateRating } = useMutation(
		'setNewRating',
		({ value }: { value: number }) => ratingService.setRating(movieId, value),
		{
			onError: () => {
				toastError('Проблема с обновлением рейтинга')
			},
			onSuccess: () => {
				toastr.success('Рейтинг был обновлен', '')
				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 3000)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await updateRating({ value: nextValue })
	}
	return { rating, isSended, handleClick }
}
