import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IMovieEditInput } from '@/screens/admin/movie/movieedit.interface'
import { IProfileInput } from '@/screens/profile/profile.interface'

import { movieService } from '@/services/movie.service'
import { UserService } from '@/services/user.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../config/url.config'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onError() {
			toastError('Ошибка с получением профиля')
		},
		onSuccess: ({ data }) => {
			setValue('email', data.email)
		},
	})
	const { mutateAsync: updateProfile } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError: () => {
				toastError('Проблема с обновлением профиля')
			},
			onSuccess: () => {
				toastr.success('Профиль был обновлен', '')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await updateProfile(data)
	}

	return { onSubmit, isLoading }
}
