import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IMovieEditInput } from '@/screens/admin/movie/movieedit.interface'

import { movieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { push, query } = useRouter()

	const movieId = String(`/${query.id}`)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => movieService.getById(movieId),
		{
			onError() {
				toastError('Ошибка с получением фильма')
			},
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync: updateMovie } = useMutation(
		'updateMovie',
		(data: IMovieEditInput) => movieService.updateMovie(movieId, data),
		{
			onError: () => {
				toastError('Проблема с обновлением фильма')
			},
			onSuccess: () => {
				push(getAdminUrl('movies'))
					.then()
					.catch((e) => e)
				toastr.success('Фильм был обновлен', '')
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await updateMovie(data)
	}

	return { onSubmit, isLoading }
}
